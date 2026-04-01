import { validPalindromeDeletion } from './palindrome';

describe('validPalindromeII', () => {

  // --- Already a palindrome (no deletion needed) ---

  test('returns true for an empty string', () => {
    expect(validPalindromeDeletion('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(validPalindromeDeletion('a')).toBe(true);
  });

  test('returns true for two identical characters', () => {
    expect(validPalindromeDeletion('aa')).toBe(true);
  });

  test('returns true for an odd-length palindrome', () => {
    expect(validPalindromeDeletion('racecar')).toBe(true);
  });

  test('returns true for an even-length palindrome', () => {
    expect(validPalindromeDeletion('abba')).toBe(true);
  });

  test('returns true for a five-character palindrome', () => {
    // 'abcba': a==a, b==b, center 'c' — already valid, zero deletions needed
    expect(validPalindromeDeletion('abcba')).toBe(true);
  });

  test('returns true for all same characters', () => {
    // Every pair matches regardless of which character is chosen as the deletion
    expect(validPalindromeDeletion('aaaa')).toBe(true);
  });

  // --- Needs exactly one deletion to become a palindrome ---

  test('returns true for two different characters (delete either one)', () => {
    // 'ab' -> delete 'a' -> 'b', or delete 'b' -> 'a'; both are palindromes
    expect(validPalindromeDeletion('ab')).toBe(true);
  });

  test('returns true when deleting the first character fixes it', () => {
    // 'xaba': left=0 'x', right=3 'a', mismatch
    // skip left (advance left to 1) -> check 'aba' -> a==a, center 'b' -> palindrome
    expect(validPalindromeDeletion('xaba')).toBe(true);
  });

  test('returns true when deleting the last character fixes it', () => {
    // 'abax': left=0 'a', right=3 'x', mismatch
    // skip right (retreat right to 2) -> check 'aba' -> a==a, center 'b' -> palindrome
    expect(validPalindromeDeletion('abax')).toBe(true);
  });

  test('returns true when deleting a character just inside the left boundary fixes it', () => {
    // 'aabba': a==a, then left=1 'a', right=3 'b', mismatch
    // skip left (advance left to 2) -> check 'bb' -> b==b -> palindrome
    expect(validPalindromeDeletion('aabba')).toBe(true);
  });

  test('returns true when deleting a character just inside the right boundary fixes it', () => {
    // 'abbaa': a==a, then left=1 'b', right=3 'a', mismatch
    // skip right (retreat right to 2) -> check 'bb' -> b==b -> palindrome
    expect(validPalindromeDeletion('abbaa')).toBe(true);
  });

  test('returns true when the deletable character sits at the center', () => {
    // 'abecba': a==a, b==b, then left=2 'e', right=3 'c', mismatch
    // skip left (advance left to 3) -> check 'c' alone -> palindrome
    expect(validPalindromeDeletion('abecba')).toBe(true);
  });

  test('returns true for all same characters except one at the end', () => {
    // 'aaab': left=0 'a', right=3 'b', mismatch
    // skip right -> check 'aaa' -> palindrome
    expect(validPalindromeDeletion('aaab')).toBe(true);
  });

  test('returns true for all same characters except one at the start', () => {
    // 'baaa': left=0 'b', right=3 'a', mismatch
    // skip left -> check 'aaa' -> palindrome
    expect(validPalindromeDeletion('baaa')).toBe(true);
  });

  test('returns true when one extra character is prepended to a longer palindrome', () => {
    // 'zlevel': left=0 'z', right=5 'l', mismatch
    // skip left -> check 'level' -> l==l, e==e, center 'v' -> palindrome
    expect(validPalindromeDeletion('zlevel')).toBe(true);
  });

  test('returns true when one extra character is appended to a longer palindrome', () => {
    // 'levelz': left=0 'l', right=5 'z', mismatch
    // skip right -> check 'level' -> palindrome
    expect(validPalindromeDeletion('levelz')).toBe(true);
  });

  // --- Longer strings where both skip-left and skip-right paths must be explored ---

  test('returns true when only the skip-right path at the mismatch succeeds', () => {
    // 'cbbcc': c==c, then left=1 'b', right=3 'c', mismatch
    // skip left (advance left to 2) -> check s[2..3]='bc' -> b!=c, fails
    // skip right (retreat right to 2) -> check s[1..2]='bb' -> b==b, succeeds
    expect(validPalindromeDeletion('cbbcc')).toBe(true);
  });

  test('returns true when only the skip-left path at the mismatch succeeds', () => {
    // 'ccbbc': c==c, then left=1 'c', right=3 'b', mismatch
    // skip left (advance left to 2) -> check s[2..3]='bb' -> b==b, succeeds
    expect(validPalindromeDeletion('ccbbc')).toBe(true);
  });

  test('returns true when the mismatch is deep inside and one skip resolves it', () => {
    // 'abcbca': a==a, then left=1 'b', right=4 'c', mismatch
    // skip left (advance left to 2) -> check s[2..4]='cbc' -> c==c, center 'b' -> palindrome
    expect(validPalindromeDeletion('abcbca')).toBe(true);
  });

  // --- Cannot become a palindrome with at most one deletion ---

  test('returns false for a three-character string with all different characters', () => {
    // 'abc': delete 'a'->'bc', delete 'b'->'ac', delete 'c'->'ab' — none are palindromes
    expect(validPalindromeDeletion('abc')).toBe(false);
  });

  test('returns false for a four-character string needing two deletions', () => {
    // 'abcd': every single-deletion result is not a palindrome
    expect(validPalindromeDeletion('abcd')).toBe(false);
  });

  test('returns false for a longer string with mismatches on both ends', () => {
    // 'aabb': left=0 'a', right=3 'b', mismatch
    // skip left -> check s[1..3]='abb' -> a!=b, fails
    // skip right -> check s[0..2]='aab' -> a!=b, fails
    expect(validPalindromeDeletion('aabb')).toBe(false);
  });

  test('returns false when both skip paths fail after the first inner mismatch', () => {
    // 'abcda': a==a, then left=1 'b', right=3 'd', mismatch
    // skip left -> check s[2..3]='cd' -> c!=d, fails
    // skip right -> check s[1..2]='bc' -> b!=c, fails
    expect(validPalindromeDeletion('abcda')).toBe(false);
  });

  test('returns false for a string with multiple mismatches that one deletion cannot fix', () => {
    // 'abcdef': a!=f mismatch at ends immediately
    // skip left -> check 'bcdef' -> b!=f, fails
    // skip right -> check 'abcde' -> a!=e, fails
    expect(validPalindromeDeletion('abcdef')).toBe(false);
  });

  test('returns false for a near-palindrome with two internal mismatches', () => {
    // 'abcxyzcba': a==a, b==b, c==c, then left=3 'x', right=5 'z', mismatch
    // skip left -> check s[4..5]='yz' -> y!=z, fails
    // skip right -> check s[3..4]='xy' -> x!=y, fails
    expect(validPalindromeDeletion('abcxyzcba')).toBe(false);
  });

});
