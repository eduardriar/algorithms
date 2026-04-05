// export function canConstruct(note: string, magazine: string): boolean {
//     const constructNote = new Map<string, number>();
//     const constructMagazine = new Map<string, number>();
//     let magazineCountFromNote = 0;
//     let noteCount = 0;


//     for (const letter of note) {
//         constructNote.set(letter, (constructNote.get(letter) ?? 0) + 1)
//     }

//     for (const letter of magazine) {
//         constructMagazine.set(letter, (constructMagazine.get(letter) ?? 0) + 1)
//     }

//     for (const [letterNote, countNote] of constructNote) {
//         noteCount += countNote

//         const magazineCount = constructMagazine.get(letterNote);
//         if (!!magazineCount && magazineCount >= countNote) {
//             magazineCountFromNote += countNote;
//         }

//     }

//     return noteCount === magazineCountFromNote ? true : false;
// }

// Optimal solution:
// Instead of building two Maps and comparing at the end,
// build a single frequency map from the magazine, then
// "consume" characters as you iterate the note.
// This allows early exit on the first missing character
// and uses O(m) space instead of O(n + m).
//
export function canConstruct(note: string, magazine: string): boolean {
    const freq = new Map<string, number>();

    for (const letter of magazine) {
        freq.set(letter, (freq.get(letter) ?? 0) + 1);
    }
    
    console.log('>>> NM', note, magazine)

    for (const letter of note) {
        const count = freq.get(letter) ?? 0;
        console.log('>>> freq', freq)
        console.log('>>> count', count)
        if (count === 0) return false;
        freq.set(letter, count - 1);
    }

    return true;
}
