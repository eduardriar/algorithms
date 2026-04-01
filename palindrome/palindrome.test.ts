import { palindrome } from "./palindrome";

describe('palindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(palindrome('racecar')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(palindrome('a')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(palindrome('')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(palindrome('hello')).toBe(false);
  });

  test('returns true for "madam"', () => {
    expect(palindrome('madam')).toBe(true);
  });

  test('returns false for "algorithm"', () => {
    expect(palindrome('algorithm')).toBe(false);
  });

  test('returns true for a two-character palindrome', () => {
    expect(palindrome('aa')).toBe(true);
  });

  test('returns false for a two-character non-palindrome', () => {
    expect(palindrome('ab')).toBe(false);
  });
});
