import * as dayTwo from '../day-2';

describe('Advent of Code Day 1', () => {
  /*
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
  */
  const data: number[][] = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  describe('Problem 1', () => {
    it('should count the total safe reports', () => {
      const totalSafeReports = dayTwo.countSafeReports(data);

      expect(totalSafeReports).toBe(2);
    });
  });

  describe('Problem 2', () => {
    it('should count the total safe reports with the problem dampener', () => {
      const totalSafeReportsWithProblemDampener =
        dayTwo.countSafeReportsWithProblemDampener(data);

      expect(totalSafeReportsWithProblemDampener).toBe(4);
    });
  });
});
