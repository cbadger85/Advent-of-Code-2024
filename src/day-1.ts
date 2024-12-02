/**
 * Advent of Code Day 1
 * https://adventofcode.com/2024/day/1
 */

import { splitArray, countItemsInArray, sum } from './utils';

export function getTotalDistance(locationIds: Array<[number, number]>): number {
  const [leftLocationIds, rightLocationIds] = splitArray(locationIds);

  const sortedLeft = leftLocationIds.toSorted();
  const sortedRight = rightLocationIds.toSorted();

  const distances = sortedLeft.map((leftNumber, i) =>
    Math.abs(leftNumber - sortedRight[i]),
  );

  return sum(distances);
}

export function getTotalSimilarityScore(
  locationIds: Array<[number, number]>,
): number {
  const [leftLocationIds, rightLocationIds] = splitArray(locationIds);

  const rightLocationIdsCountMap = countItemsInArray(rightLocationIds);

  return sum(
    leftLocationIds.map((leftNum) => {
      const totalOccurences = rightLocationIdsCountMap.get(leftNum) || 0;

      return leftNum * totalOccurences;
    }),
  );
}
