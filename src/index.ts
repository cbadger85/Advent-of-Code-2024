import { readFile } from 'fs/promises';
import path from 'path';
import * as dayOne from './day-1';

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
