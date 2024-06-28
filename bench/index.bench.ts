import { bench, describe } from 'vitest'
import generate from '../src/generate';
import old_generate from './old-generate';

describe('generate', () => {
  bench('@ctrl/tinycolor', () => {
    old_generate('#66ccff');
  });

  bench('@ant-design/fast-color', () => {
    generate('#66ccff');
  });
});
