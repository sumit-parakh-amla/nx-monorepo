import { sum } from './math';

describe('sum', () => {
  it('should add 2 numbers', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
