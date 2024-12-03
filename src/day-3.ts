/**
 * Advent of Code Day 3
 * https://adventofcode.com/2024/day/3
 */

import { isNotNullish } from './utils';

export function getSumOfMultiplyExpressions(input: string): number {
  // matchs mul(number, number)
  const matcher = /mul\(\d{1,3},\d{1,3}\)/g;

  const [...matchingExpressions] = input
    .matchAll(matcher)
    .map(([match]) => match);

  return matchingExpressions
    .map(parseMulExpression)
    .map(evaluateMulExpression)
    .reduce((sum, value) => sum + value, 0);
}

export function getSumOfMultiplyExpressionsWithDosAndDonts(
  input: string,
): number {
  // matches mul(number, number) OR do() OR don't()
  const matcher = /mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\)/g;

  const [...matchingExpressions] = input
    .matchAll(matcher)
    .map(([match]) => {
      if (isDo(match)) {
        return 'DO' as const;
      }

      if (isDont(match)) {
        return 'DONT' as const;
      }

      if (isMul(match)) {
        return evaluateMulExpression(parseMulExpression(match));
      }

      return null; // noop
    })
    .filter(isNotNullish);

  return matchingExpressions.reduce<['DO' | 'DONT', number]>(
    ([currentCommand, sum], item) => {
      // if the item is a command, update the current command
      if (item === 'DO' || item === 'DONT') {
        return [item, sum];
      }

      // if the current command is DONT, skip the number and don't add it to the sum.
      if (currentCommand === 'DONT') {
        return [currentCommand, sum];
      }

      // the current command is DO, add the number to the sum
      return [currentCommand, sum + item];
    },
    ['DO', 0],
  )[1];
}

function parseMulExpression(expression: string): [number, number] {
  const [left, right] = expression.slice(4).slice(0, -1).split(',');

  return [Number(left), Number(right)];
}

function evaluateMulExpression([left, right]: [number, number]): number {
  return left * right;
}

function isMul(expression: string): boolean {
  return expression.startsWith('mul');
}

function isDo(expression: string): boolean {
  return expression === 'do()';
}

function isDont(expression: string): boolean {
  return expression === `don't()`;
}
