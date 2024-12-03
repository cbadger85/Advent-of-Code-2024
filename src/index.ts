import { readFile } from 'fs/promises';
import path from 'path';
import * as dayOne from './day-1';
import * as dayTwo from './day-2';
import * as dayThree from './day-3';

const DATA_DIR = path.join(process.cwd(), 'data');

const dayOneData = await readFile(path.join(DATA_DIR, 'day-1.csv')).then(
  (data) =>
    data
      .toString('utf-8')
      .trim()
      .split('\r\n')
      .map(
        (ids) =>
          ids.split('   ').map((id) => Number(id.trim())) as [number, number],
      ),
);

console.log('DAY ONE\n---');

const dayOneTotalDistance = dayOne.getTotalDistance(dayOneData);

console.log(`Day One Total Distance: ${dayOneTotalDistance}`);

const dayOneTotalSimilarity = dayOne.getTotalSimilarityScore(dayOneData);

console.log(`Day One Total Similarity Score: ${dayOneTotalSimilarity}`);

console.log('\n');

const dayTwoData = await readFile(path.join(DATA_DIR, 'day-2.csv')).then(
  (data) =>
    data
      .toString('utf-8')
      .trim()
      .split('\r\n')
      .map((reports) => reports.split(' ').map(Number)),
);

console.log('DAY TWO\n---');

const dayTwoTotalSafeReports = dayTwo.countSafeReports(dayTwoData);

console.log(`Day Two Total Safe Reports: ${dayTwoTotalSafeReports}`);

const dayTwoTotalSafeReportsWithProblemDampener =
  dayTwo.countSafeReportsWithProblemDampener(dayTwoData);

console.log(
  `Day Two Total Safe Reports with Problem Dampener: ${dayTwoTotalSafeReportsWithProblemDampener}`,
);

console.log('\n');

const dayThreeData = await readFile(path.join(DATA_DIR, 'day-3.txt')).then(
  (data) => data.toString('utf-8'),
);

console.log('DAY THREE\n---');

const sumOfMultiplyExpressions =
  dayThree.getSumOfMultiplyExpressions(dayThreeData);

console.log(
  `Day Three Sum of Multiply Expressions: ${sumOfMultiplyExpressions}`,
);

const sumOfMultiplyExpressionsWithDosAndDonts =
  dayThree.getSumOfMultiplyExpressionsWithDosAndDonts(dayThreeData);

console.log(
  `Day Three Sum of Multiply Expressions with Do's and Don'ts: ${sumOfMultiplyExpressionsWithDosAndDonts}`,
);

console.log('\n');
