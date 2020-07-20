import { add } from '../src/add'

describe('test add function', () => {
  it('1 + 1 should return 2', () => {
    expect(add(1, 1)).toBe(2)
  })
})
