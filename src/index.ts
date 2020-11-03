import { strict } from 'assert'

interface ITableItem {
  [key: string]: boolean
}

export const isComment = (str: string) => {
  return str.includes('//')
}

export const isTernary = (str: string) => {
  return str.includes(' ? ')
}

export const isBalanced = ([...str]) => {
  return str.reduce((uptoPrevChar, thisChar) => {
    ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--))

    return uptoPrevChar
  }, 0) === 0
}

export const restoreBalance = (str: string) => {
  while (str.charAt(0) === '(') {
    str = str.substring(1)
  }

  while (str.charAt(str.length - 1) === ')' && !isBalanced(str)) {
    str = str.slice(0, -1)
  }

  return str.trim()
}

export const extractValues = (str: string) => {
  return [
    ...new Set(
      str
      .replace(/!|&|\||=/g, ' ')
      .split('  ')
      .map((el) => isBalanced(el) ? el.trim() : restoreBalance(el.trim()))
      .filter(Boolean)
    )
  ]
}

export const convertValues = (input: string) => {
  const variables = extractValues(input)
  let parsedString = input

  for (let i = 0; i < variables.length; i++) {
    const swap = 'a' + i.toString()
    parsedString = unescape(escape(parsedString).replace(new RegExp(escape(variables[i]), 'g'), swap))
    variables[i] = swap
  }

  return {variables, parsedString}
}

export const calcResult = (result: ITableItem, body: string) => {
  const fn = Function(`return (${Object.keys(result).join()}) => ${body}`)()
  return fn(...Object.values(result))
}

export const generateTable = (input: string) => {
  const {variables, parsedString} = convertValues(input)
  const booleans = extractValues(input)
  const numbersOfSets = 1 << variables.length
  const table: ITableItem[] = []

  for (let i = 0; i < numbersOfSets; i++) {
    table.push({})
    for (let j = 0; j < variables.length; j++) {
      table[i][variables[j]] = ((1 << j) & i) > 0
    }

    table[i][input] = calcResult(table[i], parsedString)

    for (let j = 0; j < variables.length; j++) {
      delete table[i][variables[j]]
      table[i][booleans[j]] = ((1 << j) & i) > 0
    }
  }

  return table
}

