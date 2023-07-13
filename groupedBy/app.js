// https://leetcode.com/problems/group-by/description/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const groups = {};
  this.forEach(x => {
      const groupName = fn(x);
      if(groups[groupName]){
          groups[groupName].push(x)
      } else {
         groups[groupName] = [x] 
      }
  })
  return groups;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/