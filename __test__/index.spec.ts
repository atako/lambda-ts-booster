import { sum } from '../src/index'

describe('init test', () => {
  test('should return sum', () => {
    expect(sum(3, 9)).toBe(12)
  })
})
