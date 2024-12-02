/**
 * Splits an array of tuples into two separate arrays.
 *
 * @template T - The type of elements in the tuples.
 * @param {Array<[T, T]>} data - The input array of tuples to be split.
 * @returns {[T[], T[]]} An array containing two arrays: the first with all left elements, the second with all right elements.
 *
 * @example
 * const input = [[1, 'a'], [2, 'b'], [3, 'c']];
 * const [numbers, letters] = splitArray(input);
 * // numbers = [1, 2, 3]
 * // letters = ['a', 'b', 'c']
 */
export function splitArray<T>(data: Array<[T, T]>): [T[], T[]] {
  const left: T[] = [];
  const right: T[] = [];

  for (const [leftItem, rightItem] of data) {
    left.push(leftItem);
    right.push(rightItem);
  }

  return [left, right];
}

/**
 * Counts the occurrences of each unique item in an array.
 *
 * @template T - The type of elements in the input array.
 * @param {T[]} data - The input array to count items from.
 * @returns {Map<T, number>} A Map where keys are unique items from the input array and values are their occurrence counts.
 *
 * @example
 * const input = ['a', 'b', 'a', 'c', 'b', 'a'];
 * const result = countItemsInArray(input);
 * // result = Map { 'a' => 3, 'b' => 2, 'c' => 1 }
 */
export function countItemsInArray<T>(data: T[]): Map<T, number> {
  const countMap = new Map<T, number>();

  for (const item of data) {
    const currentCount = countMap.get(item) || 0;

    countMap.set(item, currentCount + 1);
  }

  return countMap;
}

/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the input array.
 *
 * @example
 * const result = sum([1, 2, 3, 4, 5]);
 * // result = 15
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}
