const isBalanced = ([...str]) => {
  return str.reduce((uptoPrevChar, thisChar) => {
    ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--))

    return uptoPrevChar
  }, 0) === 0
}

const extractValues = (str: string) => {
  return [
    ...new Set(
      str
      .replace(/!|&|\||=/g, ' ')
      .split('  ')
      .reduce<string[]>((acc, el) => {
        if (!el) return acc
        return !new RegExp(/\(([^)]+)\)/).test(el) ? [...acc, el.replace(/\(|\)| /g, '')] : [...acc, el]
      }, [])
      .map((el) => isBalanced(el) ? el : el.replace(/\){2,}/g, ')').replace(/\({2,}/g, '('))
      .filter(Boolean)
    )
  ]
}

const convertValues = (input: string) => {
  const variables = extractValues(input)
  let parsedString = input

  for (let i = 0; i < variables.length; i++) {
    const swap = 'a' + i.toString()
    parsedString = unescape(escape(parsedString).replace(new RegExp(escape(variables[i]), 'g'), swap))
    variables[i] = swap
  }

  return {variables, parsedString}
}

const calcResult = (result: any, body: string) => {
  const fn = Function(`return (${Object.keys(result).join()}) => ${body}`)()
  return fn(...Object.values(result))
}

export const generateTable = (input: string) => {
  const {variables, parsedString} = convertValues(input)
  const booleans = extractValues(input)
  const numbersOfSets = 1 << variables.length
  const table: Array<{[key: string]: boolean}> = []

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

