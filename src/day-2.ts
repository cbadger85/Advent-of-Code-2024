/**
 * Advent of Code Day 2
 * https://adventofcode.com/2024/day/2
 */

import { isNotNullish, slidingWindow } from './utils';

export function countSafeReports(reportList: number[][]): number {
  return reportList.filter(isSafe).length;
}

export function countSafeReportsWithProblemDampener(
  reportList: number[][],
): number {
  return reportList.filter((reports) => {
    const permutations = getReportPermutations(reports);

    return permutations.some(isSafe);
  }).length;
}

function getReportPermutations(reports: number[]): number[][] {
  const permutations: number[][] = [];

  // Generate all possible permutations of the reports array
  // by creating new arrays that exclude one element at a time
  for (let i = 0; i < reports.length; i++) {
    permutations.push(reports.filter((_, reportIndex) => i !== reportIndex));
  }

  return permutations;
}

function isSafe(reports: number[]): boolean {
  const deltas = slidingWindow(reports, 2, ([a, b]) => {
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return null;
    }

    return b - a;
  }).filter(isNotNullish);

  const isAllIncreasing = deltas.every((delta) => delta > 0);
  const isAllDecreasing = deltas.every((delta) => delta < 0);
  const isGradual = deltas
    .map(Math.abs)
    .every((delta) => delta > 0 && delta <= 3);

  return (isAllIncreasing || isAllDecreasing) && isGradual;
}
