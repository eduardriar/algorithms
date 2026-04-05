export function duplicateChars(chars: number[] | string[]) {
    let duplicated: { [key: string | number]: number } = {}

    chars.forEach(char => {
        if (!duplicated[char]) {
            duplicated = { ...duplicated, [char]: 1 }
        } else {
            duplicated = { ...duplicated, [char]: duplicated[char] + 1 }
        }
    })

    return !!Object.values(duplicated).find(number => number > 1)
}

// ============================================
// OPTIMAL SOLUTION — All tests passed (8/8)
// ============================================
//
// Use a Set instead of counting frequencies.
// If the element is already in the Set, there's
// a duplicate — return immediately. No need to
// count or iterate a second time.
//
// function duplicateCharsAI(chars: number[] | string[]): boolean {
//     const seen = new Set<number | string>();

//     for (const char of chars) {
//         if (seen.has(char)) return true;
//         seen.add(char);
//     }

//     return false;
// }
//
// Time: O(n) | Space: O(n)
// ============================================