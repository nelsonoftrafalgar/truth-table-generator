import { isBalanced } from '../..'

const mockDataBalanced = [
  '(hdgfid)',
  '(sdgsg)()',
  '((sdgsgg))',
  'sjdbfksj(sgsgd, sdgsdg)',
  '(ssgsd(sdgs))'
]

const mockDataUnBalanced = [
  '(hdgfid))',
  'sdgsg)()',
  '((sdgsgg)',
  'sjdbfksj((sgsgd, sdgsdg)',
  '((ssgsd(sdgs))'
]

test('it should return true if string has balances parentheses', () => {
  expect(mockDataBalanced.map(isBalanced).every((el) => el)).toBeTruthy()
})

test('it should return false if string has unbalances parentheses', () => {
  expect(mockDataUnBalanced.map(isBalanced).every((el) => el)).toBeFalsy()
})