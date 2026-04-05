export function palindrome(word: string){
    const reversed = word.trim().replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split('').reverse().join('');

    return word === reversed;
}

// ============================================
// OPTIMAL SOLUTION — All tests passed (8/8)
// ============================================
//
// Two-pointer approach: compare characters from
// both ends moving inward. No extra string/array
// allocation needed.
//
// function palindrome(word: string): boolean {
//     let left = 0;
//     let right = word.length - 1;
//
//     while (left < right) {
//         if (word[left] !== word[right]) return false;
//         left++;
//         right--;
//     }
//
//     return true;
// }
//
// Time: O(n) | Space: O(1)
// ============================================
