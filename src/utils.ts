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

/**
 * Applies a sliding window operation on an array and returns the results.
 *
 * @template T - The type of elements in the input array.
 * @template R - The type of elements in the output array.
 * @param {T[]} array - The input array to apply the sliding window on.
 * @param {number} windowSize - The size of the sliding window.
 * @param {function(T[]): R} cb - The callback function to apply to each window.
 * @returns {R[]} An array containing the results of applying the callback to each window.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const result = slidingWindow(numbers, 3, (window) => window.reduce((a, b) => a + b, 0));
 * // result = [6, 9, 12]
 */
export function slidingWindow<T, R>(
  array: T[],
  windowSize: number,
  cb: (arg: T[]) => R,
): R[] {
  const results: R[] = [];

  for (let i = 0; i < array.length; i++) {
    const window = array.slice(i, i + windowSize);
    results.push(cb(window));
  }

  return results;
}

/**
 * Checks if a value is not null or undefined.
 *
 * @template T - The type of the value being checked.
 * @param {T | null | undefined} value - The value to check.
 * @returns {boolean} True if the value is not null and not undefined, false otherwise.
 *
 * @example
 * const result1 = isNotNullish(42);
 * // result1 = true
 *
 * const result2 = isNotNullish(null);
 * // result2 = false
 *
 * const result3 = isNotNullish(undefined);
 * // result3 = false
 */
export function isNotNullish<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
