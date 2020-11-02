import { restoreBalance } from '../..'

const result1 = 'var1'
const result2 = 'var2()'

test('it should remove extra starting and endind parentheses from unbalanced string', () => {
  expect(restoreBalance('var1)')).toEqual(result1)
  expect(restoreBalance('var1))')).toEqual(result1)
  expect(restoreBalance('var1)))')).toEqual(result1)

  expect(restoreBalance('(var1')).toEqual(result1)
  expect(restoreBalance('((var1')).toEqual(result1)
  expect(restoreBalance('(((var1')).toEqual(result1)

  expect(restoreBalance('var2())')).toEqual(result2)
  expect(restoreBalance('var2()))')).toEqual(result2)
  expect(restoreBalance('var2())))')).toEqual(result2)

  expect(restoreBalance('(var2()')).toEqual(result2)
  expect(restoreBalance('((var2()')).toEqual(result2)
  expect(restoreBalance('(((var2()')).toEqual(result2)
})