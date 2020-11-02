import { generateTable } from '../..'

const mockInput1 = 'var1 || var2 && !!var3 !== var4 === var5'
const mockInput2 = '(!!var1.a || var2.a) && (var3.a !== var4.a) === !var5.a'
const mockInput3 = 'var1.a() || ((var2.a() && var3.a()) !== var4.a()) === var5.a()'
const mockInput4 = '!(!!var1.a(abc) || (var2.a(abc) && (var3.a(abc) !== (var4.a(abc) === var5.a(abc)))))'
const mockInput5 = '(!!(var1.a(abc, qwe) || var2.a(abc, qwe)) && var3.a(abc, qwe)) !== (!var4.a(abc, qwe) === var5.a(abc, qwe))'

const generateResults = (input: string) => {
  const testResult = generateTable(input)
  const allResultsContainInput = testResult.every((result) => result.hasOwnProperty(input))
  const allResultsHaveBooleanValues = testResult.every((result) => Object.values(result).every((value) => typeof value === 'boolean'))
  const allResultsHave6Keys = testResult.every((result) => Object.keys(result).length === 6)

  return {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys}
}

test(`it should generate table ITableItem array from ${mockInput1}`, () => {
  const {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys} = generateResults(mockInput1)

  expect(allResultsContainInput).toBeTruthy()
  expect(allResultsHaveBooleanValues).toBeTruthy()
  expect(testResult).toHaveLength(32)
  expect(allResultsHave6Keys).toBeTruthy()
})

test(`it should generate table ITableItem array from ${mockInput2}`, () => {
  const {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys} = generateResults(mockInput2)

  expect(allResultsContainInput).toBeTruthy()
  expect(allResultsHaveBooleanValues).toBeTruthy()
  expect(testResult).toHaveLength(32)
  expect(allResultsHave6Keys).toBeTruthy()
})

test(`it should generate table ITableItem array from ${mockInput3}`, () => {
  const {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys} = generateResults(mockInput3)

  expect(allResultsContainInput).toBeTruthy()
  expect(allResultsHaveBooleanValues).toBeTruthy()
  expect(testResult).toHaveLength(32)
  expect(allResultsHave6Keys).toBeTruthy()
})

test(`it should generate table ITableItem array from ${mockInput4}`, () => {
  const {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys} = generateResults(mockInput4)

  expect(allResultsContainInput).toBeTruthy()
  expect(allResultsHaveBooleanValues).toBeTruthy()
  expect(testResult).toHaveLength(32)
  expect(allResultsHave6Keys).toBeTruthy()
})

test(`it should generate table ITableItem array from ${mockInput5}`, () => {
  const {testResult, allResultsContainInput, allResultsHaveBooleanValues, allResultsHave6Keys} = generateResults(mockInput5)

  expect(allResultsContainInput).toBeTruthy()
  expect(allResultsHaveBooleanValues).toBeTruthy()
  expect(testResult).toHaveLength(32)
  expect(allResultsHave6Keys).toBeTruthy()
})