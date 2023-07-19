// https://leetcode.com/problems/join-two-arrays-by-id

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
 var join = function(arr1, arr2) {
  const map1 = arr1.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
  },{});

  const result = map1;
  arr2.forEach(x => {
      const acc1Counterpart = result[x.id];
      if(!acc1Counterpart) {
          result[x.id] = x;
      } else {
          result[x.id] = {...acc1Counterpart, ...x}
      }
  })

  const output = Object.values(result)
  const sortedOutput = output;//.sort((a,b) => a.id - b.id);

  return sortedOutput;
};