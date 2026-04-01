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

/** * @param {number[]} nums * @return {boolean} */
//function containsDuplicate(nums: number[]) { const seen = new Set(); for (const num of nums) { if (seen.has(num)) return true; seen.add(num); } return false; }