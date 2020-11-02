import { calcResult } from '../..'

const values1 = {a0: true, a1: true, a2: true, a3: true, a4: true}
const values2 = {a0: true, a1: false, a2: true, a3: false, a4: true}
const values3 = {a0: false, a1: true, a2: false, a3: true, a4: true}
const values4 = {a0: true, a1: true, a2: false, a3: false, a4: false}
const values5 = {a0: false, a1: true, a2: false, a3: true, a4: false}

const parsedString1 = 'a0 || a1 && !!a2 !== a3 === a4'
const parsedString2 = '(!!a0 || a1) && (a2 !== a3) === !a4'
const parsedString3 = 'a0 || ((a1 && a2) !== a3) === a4'
const parsedString4 = '!(!!a0 || (a1 && (a2 !== (a3 === a4))))'
const parsedString5 = '(!!(a0 || a1) && a2) !== (!a3 === a4)'

test('it should return boolean based on parsed string and set of variables', () => {
  expect(calcResult(values1, parsedString1)).toBeTruthy()
  expect(calcResult(values1, parsedString2)).toBeTruthy()
  expect(calcResult(values1, parsedString3)).toBeTruthy()
  expect(calcResult(values1, parsedString4)).toBeFalsy()
  expect(calcResult(values1, parsedString5)).toBeTruthy()

  expect(calcResult(values2, parsedString1)).toBeTruthy()
  expect(calcResult(values2, parsedString2)).toBeFalsy()
  expect(calcResult(values2, parsedString3)).toBeTruthy()
  expect(calcResult(values2, parsedString4)).toBeFalsy()
  expect(calcResult(values2, parsedString5)).toBeFalsy()

  expect(calcResult(values3, parsedString1)).toBeTruthy()
  expect(calcResult(values3, parsedString2)).toBeFalsy()
  expect(calcResult(values3, parsedString3)).toBeTruthy()
  expect(calcResult(values3, parsedString4)).toBeFalsy()
  expect(calcResult(values3, parsedString5)).toBeFalsy()

  expect(calcResult(values4, parsedString1)).toBeTruthy()
  expect(calcResult(values4, parsedString2)).toBeFalsy()
  expect(calcResult(values4, parsedString3)).toBeTruthy()
  expect(calcResult(values4, parsedString4)).toBeFalsy()
  expect(calcResult(values4, parsedString5)).toBeFalsy()

  expect(calcResult(values5, parsedString1)).toBeFalsy()
  expect(calcResult(values5, parsedString2)).toBeTruthy()
  expect(calcResult(values5, parsedString3)).toBeFalsy()
  expect(calcResult(values5, parsedString4)).toBeTruthy()
  expect(calcResult(values5, parsedString5)).toBeTruthy()
})