//https://leetcode.com/problems/simplify-path

/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  const segments = path.split('/');

  const stack = [];
  for(x of segments){
      if(x === '' || x === '.') continue;
      
      if(x === '..') {
          stack.pop();
      } else {
          stack.push(x)
      }
  }

  const output = '/' + stack.join('/');

  return output;
};

const input = "/a/./b/../../c/";
console.log(simplifyPath(input))