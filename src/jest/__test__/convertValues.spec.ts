import { convertValues } from '../..'

const variables = ['a0', 'a1', 'a2', 'a3', 'a4']

const mockInput1 = 'var1 || var2 && !!var3 !== var4 === var5'
const mockInput2 = '(!!var1 || var2) && (var3 !== var4) === !var5'
const mockInput3 = 'var1 || ((var2 && var3) !== var4) === var5'
const mockInput4 = '!(!!var1 || (var2 && (var3 !== (var4 === var5))))'
const mockInput5 = '(!!(var1 || var2) && var3) !== (!var4 === var5)'

const mockInput6 = 'var1.a || var2.a && !!var3.a !== var4.a === var5.a'
const mockInput7 = '(!!var1.a || var2.a) && (var3.a !== var4.a) === !var5.a'
const mockInput8 = 'var1.a || ((var2.a && var3.a) !== var4.a) === var5.a'
const mockInput9 = '!(!!var1.a || (var2.a && (var3.a !== (var4.a === var5.a))))'
const mockInput10 = '(!!(var1.a || var2.a) && var3.a) !== (!var4.a === var5.a)'

const mockInput11 = 'var1.a() || var2.a() && !!var3.a() !== var4.a() === var5.a()'
const mockInput12 = '(!!var1.a() || var2.a()) && (var3.a() !== var4.a()) === !var5.a()'
const mockInput13 = 'var1.a() || ((var2.a() && var3.a()) !== var4.a()) === var5.a()'
const mockInput14 = '!(!!var1.a() || (var2.a() && (var3.a() !== (var4.a() === var5.a()))))'
const mockInput15 = '(!!(var1.a() || var2.a()) && var3.a()) !== (!var4.a() === var5.a())'

const mockInput16 = 'var1.a(abc) || var2.a(abc) && !!var3.a(abc) !== var4.a(abc) === var5.a(abc)'
const mockInput17 = '(!!var1.a(abc) || var2.a(abc)) && (var3.a(abc) !== var4.a(abc)) === !var5.a(abc)'
const mockInput18 = 'var1.a(abc) || ((var2.a(abc) && var3.a(abc)) !== var4.a(abc)) === var5.a(abc)'
const mockInput19 = '!(!!var1.a(abc) || (var2.a(abc) && (var3.a(abc) !== (var4.a(abc) === var5.a(abc)))))'
const mockInput20 = '(!!(var1.a(abc) || var2.a(abc)) && var3.a(abc)) !== (!var4.a(abc) === var5.a(abc))'

const mockInput21 = 'var1.a(abc, qwe) || var2.a(abc, qwe) && !!var3.a(abc, qwe) !== var4.a(abc, qwe) === var5.a(abc, qwe)'
const mockInput22 = '(!!var1.a(abc, qwe) || var2.a(abc, qwe)) && (var3.a(abc, qwe) !== var4.a(abc, qwe)) === !var5.a(abc, qwe)'
const mockInput23 = 'var1.a(abc, qwe) || ((var2.a(abc, qwe) && var3.a(abc, qwe)) !== var4.a(abc, qwe)) === var5.a(abc, qwe)'
const mockInput24 = '!(!!var1.a(abc, qwe) || (var2.a(abc, qwe) && (var3.a(abc, qwe) !== (var4.a(abc, qwe) === var5.a(abc, qwe)))))'
const mockInput25 = '(!!(var1.a(abc, qwe) || var2.a(abc, qwe)) && var3.a(abc, qwe)) !== (!var4.a(abc, qwe) === var5.a(abc, qwe))'

const mockResult1 = {variables, parsedString: 'a0 || a1 && !!a2 !== a3 === a4'}
const mockResult2 = {variables, parsedString: '(!!a0 || a1) && (a2 !== a3) === !a4'}
const mockResult3 = {variables, parsedString: 'a0 || ((a1 && a2) !== a3) === a4'}
const mockResult4 = {variables, parsedString: '!(!!a0 || (a1 && (a2 !== (a3 === a4))))'}
const mockResult5 = {variables, parsedString: '(!!(a0 || a1) && a2) !== (!a3 === a4)'}

test('it should convert string boolean values to simple variables and extract them to an array', () => {
  expect(convertValues(mockInput1)).toMatchObject(mockResult1)
  expect(convertValues(mockInput2)).toMatchObject(mockResult2)
  expect(convertValues(mockInput3)).toMatchObject(mockResult3)
  expect(convertValues(mockInput4)).toMatchObject(mockResult4)
  expect(convertValues(mockInput5)).toMatchObject(mockResult5)

  expect(convertValues(mockInput6)).toMatchObject(mockResult1)
  expect(convertValues(mockInput7)).toMatchObject(mockResult2)
  expect(convertValues(mockInput8)).toMatchObject(mockResult3)
  expect(convertValues(mockInput9)).toMatchObject(mockResult4)
  expect(convertValues(mockInput10)).toMatchObject(mockResult5)

  expect(convertValues(mockInput11)).toMatchObject(mockResult1)
  expect(convertValues(mockInput12)).toMatchObject(mockResult2)
  expect(convertValues(mockInput13)).toMatchObject(mockResult3)
  expect(convertValues(mockInput14)).toMatchObject(mockResult4)
  expect(convertValues(mockInput15)).toMatchObject(mockResult5)

  expect(convertValues(mockInput16)).toMatchObject(mockResult1)
  expect(convertValues(mockInput17)).toMatchObject(mockResult2)
  expect(convertValues(mockInput18)).toMatchObject(mockResult3)
  expect(convertValues(mockInput19)).toMatchObject(mockResult4)
  expect(convertValues(mockInput20)).toMatchObject(mockResult5)

  expect(convertValues(mockInput21)).toMatchObject(mockResult1)
  expect(convertValues(mockInput22)).toMatchObject(mockResult2)
  expect(convertValues(mockInput23)).toMatchObject(mockResult3)
  expect(convertValues(mockInput24)).toMatchObject(mockResult4)
  expect(convertValues(mockInput25)).toMatchObject(mockResult5)
})