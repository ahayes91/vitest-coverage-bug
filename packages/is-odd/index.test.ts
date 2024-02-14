import { describe, test, expect } from 'vitest';
import { isOdd } from './index';

describe('isOdd', () => {
  test('is true for odd number', () => {
    expect(isOdd(3)).toBeTruthy();
  });
});
