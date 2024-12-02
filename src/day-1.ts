/**
 * Advent of Code Day 1
 * https://adventofcode.com/2024/day/1
 */

export function getTotalDistance(locationIds: Array<[number, number]>): number {
  const [leftLocationIds, rightLocationIds] = splitArray(locationIds);

  const distances = getDistances(leftLocationIds, rightLocationIds);

  return distances.reduce(
    (totalDistance, distance) => totalDistance + distance,
    0,
  );
}

export function getTotalSimilarityScore(
  locationIds: Array<[number, number]>,
): number {
  const [leftLocationIds, rightLocationIds] = splitArray(locationIds);

  const rightLocationIdsCountMap = getCount(rightLocationIds);

  return leftLocationIds
    .map((leftNum) => {
      const totalOccurences = rightLocationIdsCountMap.get(leftNum) || 0;

      return leftNum * totalOccurences;
    })
    .reduce((totalScore, score) => totalScore + score, 0);
}

function splitArray<T>(data: Array<[T, T]>): [T[], T[]] {
  const left = data.map(([left]) => left);
  const right = data.map(([_, right]) => right);

  return [left, right];
}

function getCount<T>(data: T[]): Map<T, number> {
  const countMap = new Map<T, number>();

  for (const item of data) {
    const currentCount = countMap.get(item) || 0;

    countMap.set(item, currentCount + 1);
  }

  return countMap;
}

function getDistances(
  leftLocationIds: number[],
  rightLocationIds: number[],
): number[] {
  const left = leftLocationIds.toSorted();
  const right = rightLocationIds.toSorted();

  return left.map((leftNumber, i) => Math.abs(leftNumber - right[i]));
}
