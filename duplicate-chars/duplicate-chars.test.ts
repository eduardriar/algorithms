import { duplicateChars } from './duplicate-chars';

describe('duplicateChars', () => {
  test('returns true when a value appears twice', () => {
    expect(duplicateChars([1, 2, 3, 1])).toBe(true);
  });

  test('returns false when all values are unique', () => {
    expect(duplicateChars([1, 2, 3, 4])).toBe(false);
  });

  test('returns true when multiple duplicates exist', () => {
    expect(duplicateChars([1, 1, 2, 2, 3, 0, 0])).toBe(true);
  });

  test('returns false for an empty array', () => {
    expect(duplicateChars([])).toBe(false);
  });

  test('returns false for a single element', () => {
    expect(duplicateChars([5])).toBe(false);
  });

  test('returns true when all elements are the same', () => {
    expect(duplicateChars([7, 7, 7])).toBe(true);
  });

  test('returns true with string values', () => {
    expect(duplicateChars(['a', 'b', 'c', 'a'])).toBe(true);
  });

  test('returns false with unique string values', () => {
    expect(duplicateChars(['a', 'b', 'c'])).toBe(false);
  });
});
