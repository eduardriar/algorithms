import { canConstruct } from './ransom-note';

describe('canConstruct', () => {
  test('returns true when note can be built from magazine', () => {
    expect(canConstruct('hello', 'helloworld')).toBe(true);
  });

  test('returns false when magazine lacks a character', () => {
    expect(canConstruct('abc', 'ab')).toBe(false);
  });

  test('returns false when magazine has the characters but not enough copies', () => {
    expect(canConstruct('aab', 'ab')).toBe(false);
  });

  test.only('returns true when magazine has extra characters', () => {
    expect(canConstruct('ab', 'aabbc')).toBe(true);
  });

  test('returns true for an empty note', () => {
    expect(canConstruct('', 'anything')).toBe(true);
  });

  test('returns false for a non-empty note with empty magazine', () => {
    expect(canConstruct('a', '')).toBe(false);
  });

  test('returns true when both strings are empty', () => {
    expect(canConstruct('', '')).toBe(true);
  });

  test('returns true when note and magazine are identical', () => {
    expect(canConstruct('abc', 'abc')).toBe(true);
  });

  test('returns true when magazine has exactly the needed frequency', () => {
    expect(canConstruct('aabb', 'abab')).toBe(true);
  });

  test('returns false when one character is missing despite others matching', () => {
    expect(canConstruct('abcz', 'abcabc')).toBe(false);
  });

  test('handles repeated characters correctly', () => {
    expect(canConstruct('aaaa', 'aaaa')).toBe(true);
    expect(canConstruct('aaaa', 'aaa')).toBe(false);
  });

  test('handles spaces and special characters', () => {
    expect(canConstruct('hi there', 'h i t h e r e x')).toBe(true);
  });

  test('returns false when magazine has some but not all needed characters', () => {
    expect(canConstruct('aabb', 'aab')).toBe(false);
  });

  test('returns false when note has a character not in magazine at all', () => {
    expect(canConstruct('xyz', 'aabbcc')).toBe(false);
  });

  test('returns true for single character present in magazine', () => {
    expect(canConstruct('a', 'a')).toBe(true);
  });

  test('returns false for single character not in magazine', () => {
    expect(canConstruct('a', 'b')).toBe(false);
  });

  test('returns true when magazine is much longer than note', () => {
    expect(canConstruct('ab', 'xyzabxyzabxyz')).toBe(true);
  });

  test('returns false when note is longer than magazine', () => {
    expect(canConstruct('aaabbb', 'ab')).toBe(false);
  });

  test('handles note with all same characters needing exact count from magazine', () => {
    expect(canConstruct('aaa', 'aaabbb')).toBe(true);
    expect(canConstruct('aaa', 'aabbb')).toBe(false);
  });
});
