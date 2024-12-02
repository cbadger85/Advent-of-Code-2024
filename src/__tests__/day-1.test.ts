import * as dayOne from '../day-1';

describe('Advent of Code Day 1', () => {
  const data: Array<[number, number]> = [
    [3, 4],
    [4, 3],
    [2, 5],
    [1, 3],
    [3, 9],
    [3, 3],
  ];

  describe('Problem 1', () => {
    it('should calculate total distance', () => {
      const totalDistance = dayOne.getTotalDistance(data);

      expect(totalDistance).toBe(11);
    });
  });

  describe('Problem 2', () => {
    it('should calculate total similarity', () => {
      const totalSimilarity = dayOne.getTotalSimilarityScore(data);

      expect(totalSimilarity).toBe(31);
    });
  });
});
