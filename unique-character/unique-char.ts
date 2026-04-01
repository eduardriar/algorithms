export function firstUniqueChar(word: string) {
    let charsCount: {[key:string]: number} = {}
    let firstCharFound = ""

    for (const letter of word) {
        if(!charsCount[letter]){
            charsCount = {...charsCount, [letter]: 1}
        } else {
            charsCount = {...charsCount, [letter]: charsCount[letter] + 1}
        }
    }

    for (const key in charsCount) {
        if (!Object.prototype.hasOwnProperty.call(charsCount, key)) continue;
        
        const count = charsCount[key];
        
        if(count === 1) return firstCharFound = key
    }

    return firstCharFound
}

export function firstUniqueCharAI(word: string): string {                                                                                                   
      const counts = new Map<string, number>();                                                                                                               
                                                                                                                                                            
      for (const c of word) {                                                                                                                                 
          counts.set(c, (counts.get(c) ?? 0) + 1);                                                                                                          
      }

      for (const [c, count] of counts) {                                                                                                                      
          if (count === 1) return c;
      }                                                                                                                                                       
                                                                                                                                                            
      return "";
  }
