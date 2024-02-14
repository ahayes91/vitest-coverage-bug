import { describe, test, expect } from 'vitest';
import { isEven } from './index';

describe('isEven', () => {
  test('is true for even number', () => {
    expect(isEven(4)).toBeTruthy();
  });
});
