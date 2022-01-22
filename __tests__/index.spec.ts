import { add } from '../src'

describe("add fn", () => {
  test('should be 4', () => {
    expect(add(2, 2)).toBe(4)
  })
})
