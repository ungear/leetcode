// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  const sourceMap = s.split('').reduce((acc, curr) => {
      if(!Number(acc[curr])) acc[curr]= 0;
      acc[curr]++;
      return acc;
  }, {})

  const targetMap = t.split('').reduce((acc, curr) => {
      if(!Number(acc[curr])) acc[curr]= 0;
      acc[curr]++;
      return acc;
  }, {});

  for(let letter in sourceMap){
      if(sourceMap[letter] !== targetMap[letter]){
          return false;
      }
  }
  return true
};