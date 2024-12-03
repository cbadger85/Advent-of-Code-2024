import * as dayThree from '../day-3';

describe('Advent of Code Day 3', () => {
  describe('Problem 1', () => {
    const data =
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

    it('should parse the string and perform the operations, then sum them', () => {
      const sumOfMultiplyExpressions =
        dayThree.getSumOfMultiplyExpressions(data);

      expect(sumOfMultiplyExpressions).toBe(161);
    });
  });

  describe.only('Problem 2', () => {
    const data = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

    it('should parse the string and perform the operations, then sum them', () => {
      const sumOfMultiplyExpressions =
        dayThree.getSumOfMultiplyExpressionsWithDosAndDonts(data);

      expect(sumOfMultiplyExpressions).toBe(48);
    });
  });
});
