//https://leetcode.com/problems/compact-object

/**
 * @param {Object} obj
 * @return {Object}
 */
 var compactObject = function(obj) {
  const result = Array.isArray(obj)
      ? clearArray(obj)
      : clearObj(obj)
  
  return result;
};

function clearArray(arr){
  for(let index = 0; index < arr.length; index++){
    const x = arr[index];
    if(Array.isArray(x)) {
      clearArray(x)
    } else if(typeof x === 'object' && x !== null) {
        clearObj(x)
    } else {
      if(!Boolean(x)) {
        arr.splice(index, 1);
        index--;
      }
    }
  }
  return arr;
}

function clearObj(obj){
  Object.keys(obj).forEach(x => {
      if(Array.isArray(obj[x])) {
          clearArray(obj[x])
      } else if(typeof obj[x] === 'object' && obj[x] !== null) {
          clearObj(obj[x])
      } else {
          if(!Boolean(obj[x])) delete obj[x];
      }

  })

  return obj;
}

const input = [null, 0, 5, [0], [false, 16]]
const res = compactObject(input)
console.log(input)