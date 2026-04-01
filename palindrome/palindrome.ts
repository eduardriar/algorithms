export function palindrome(word: string){
    const reversed = word.trim().replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split('').reverse().join('');

    return word === reversed;
}
