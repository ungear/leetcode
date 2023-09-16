// solution for https://leetcode.com/problems/letter-combinations-of-a-phone-number

const digitTiLetters = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if(digits.length === 0) return [];
    const sourceLetters = digits
      .split('')
      .map(l => digitTiLetters[l]);

    const currentIndexes = sourceLetters.map(() => 0);
    const result = [];
    let isOver = false;
    while(isOver === false){
      const newCombination = sourceLetters.reduce((acc, curr, sourceIndex) => {
        const newLetterIndex = currentIndexes[sourceIndex];
        return acc + curr[newLetterIndex];
      }, '')

      result.push(newCombination);
      
      // bump segment indexes
      currentIndexes[0]++;
      for(let i = 0; i < currentIndexes.length; i++){
        if(currentIndexes[i] === sourceLetters[i].length){
          if(i === currentIndexes.length-1){
            isOver = true;
            break;
          } else{
            currentIndexes[i] = 0;
            currentIndexes[i+1]++;
          }
        }
      }
    }
    return result;
};

const input = '234';
console.log(letterCombinations(input));


