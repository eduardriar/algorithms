import { palindrome } from "../palindrome/palindrome";

export function validPalindromeDeletion(word: string): boolean {

    if(palindrome(word)) return true

    for (let i = 0; i < word.length; i++) {
        const element = word[i];

        if(element !== word[(word.length - 1 ) - i]){
            const deletedLeft = word.slice(0, i) + word.slice(i + 1);
            
            if(palindrome(deletedLeft)){
                return true
            } else {
                const deleteRight = word.slice(i, (word.length - 1 ) - i)

                if(palindrome(deleteRight)){
                    return true
                } else {
                    return false
                }
            }
        }
    }

    return false;
}

// ============================================
// OPTIMAL SOLUTION — All tests passed (26/26)
// ============================================
//
// Two-pointer approach without string allocation.
// When a mismatch is found, try skipping either the
// left or right character and check if the remaining
// substring is a palindrome — all done in-place.
//
// function isPalindromeRange(s: string, left: number, right: number): boolean {
//     while (left < right) {
//         if (s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }
//
// function validPalindromeDeletion(word: string): boolean {
//     let left = 0;
//     let right = word.length - 1;
//
//     while (left < right) {
//         if (word[left] !== word[right]) {
//             // Try skipping left char OR skipping right char
//             return isPalindromeRange(word, left + 1, right)
//                 || isPalindromeRange(word, left, right - 1);
//         }
//         left++;
//         right--;
//     }
//
//     return true;
// }
//
// Time: O(n) | Space: O(1)
// ============================================
