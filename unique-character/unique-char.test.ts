import { firstUniqueChar } from './unique-char';

describe('firstUniqueChar', () => {
  test('returns the first unique character', () => {
    expect(firstUniqueChar('leetcode')).toBe('l');
  });

  test('returns the first unique when duplicates come first', () => {
    expect(firstUniqueChar('aabb')).toBe('');
  });

  test('returns the unique character in the middle', () => {
    expect(firstUniqueChar('aabcbd')).toBe('c');
  });

  test('returns the first character when all are unique', () => {
    expect(firstUniqueChar('abcdef')).toBe('a');
  });

  test('returns empty string for an empty input', () => {
    expect(firstUniqueChar('')).toBe('');
  });

  test('returns the character for a single character string', () => {
    expect(firstUniqueChar('a')).toBe('a');
  });

  test('returns empty string when all characters are the same', () => {
    expect(firstUniqueChar('aaaa')).toBe('');
  });

  test('returns the last character when it is the only unique one', () => {
    expect(firstUniqueChar('aabbccd')).toBe('d');
  });

  test('handles mixed case as distinct characters', () => {
    expect(firstUniqueChar('aAbB')).toBe('a');
  });

  test('returns the first unique with spaces and special characters', () => {
    expect(firstUniqueChar('ab a')).toBe('b');
  });
});
