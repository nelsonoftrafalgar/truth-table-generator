import { extractValues } from '../..'

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

const mockResult1 = ['var1', 'var2', 'var3', 'var4', 'var5']
const mockResult2 = ['var1.a', 'var2.a', 'var3.a', 'var4.a', 'var5.a']
const mockResult3 = ['var1.a()', 'var2.a()', 'var3.a()', 'var4.a()', 'var5.a()']
const mockResult4 = ['var1.a(abc)', 'var2.a(abc)', 'var3.a(abc)', 'var4.a(abc)', 'var5.a(abc)']
const mockResult5 = ['var1.a(abc, qwe)', 'var2.a(abc, qwe)', 'var3.a(abc, qwe)', 'var4.a(abc, qwe)', 'var5.a(abc, qwe)']


test('it should extract variables from string', () => {
  expect(extractValues(mockInput1)).toMatchObject(mockResult1)
  expect(extractValues(mockInput2)).toMatchObject(mockResult1)
  expect(extractValues(mockInput3)).toMatchObject(mockResult1)
  expect(extractValues(mockInput4)).toMatchObject(mockResult1)
  expect(extractValues(mockInput5)).toMatchObject(mockResult1)

  expect(extractValues(mockInput6)).toMatchObject(mockResult2)
  expect(extractValues(mockInput7)).toMatchObject(mockResult2)
  expect(extractValues(mockInput8)).toMatchObject(mockResult2)
  expect(extractValues(mockInput9)).toMatchObject(mockResult2)
  expect(extractValues(mockInput10)).toMatchObject(mockResult2)

  expect(extractValues(mockInput11)).toMatchObject(mockResult3)
  expect(extractValues(mockInput12)).toMatchObject(mockResult3)
  expect(extractValues(mockInput13)).toMatchObject(mockResult3)
  expect(extractValues(mockInput14)).toMatchObject(mockResult3)
  expect(extractValues(mockInput15)).toMatchObject(mockResult3)

  expect(extractValues(mockInput16)).toMatchObject(mockResult4)
  expect(extractValues(mockInput17)).toMatchObject(mockResult4)
  expect(extractValues(mockInput18)).toMatchObject(mockResult4)
  expect(extractValues(mockInput19)).toMatchObject(mockResult4)
  expect(extractValues(mockInput20)).toMatchObject(mockResult4)

  expect(extractValues(mockInput21)).toMatchObject(mockResult5)
  expect(extractValues(mockInput22)).toMatchObject(mockResult5)
  expect(extractValues(mockInput23)).toMatchObject(mockResult5)
  expect(extractValues(mockInput24)).toMatchObject(mockResult5)
  expect(extractValues(mockInput25)).toMatchObject(mockResult5)
})