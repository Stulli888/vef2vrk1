import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';

describe('parse', () => {
  it('Takes in strings and sanitizes integers', () => {
    const input = ['22 \n  3  \n  77  \n 1'];
    const output = ['22', '3', '77', '1'];
    const parsed = parse(input);
    expect(parsed).toBe(output);
  });

  it('Removes whitespace from input', () => {
    const parsed = parse('  3    ');
    expect(parsed).toStrictEqual(['3']);
  });

  it('Refuses non-numbers', () => {
    const parsed = parse('abc123');
    expect(parsed).toStrictEqual([]);
  });
  it('Refuses empty string', () => {
    const parsed = parse('');
    expect(parsed).toStrictEqual([]);
  });
});
