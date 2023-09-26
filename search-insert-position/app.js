// solution for https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(target > nums[nums.length-1]) return nums.length;
  if(target < nums[0]) return 0;
  let leftBorder = 0;
  let rightBorder = nums.length-1;

  let returnValue = null;
  while(returnValue === null){
    let border = Math.floor((rightBorder - leftBorder) / 2) + leftBorder;
    
    if(rightBorder - leftBorder === 1){
      if(nums[rightBorder] === target) {
        returnValue = rightBorder
      } else if(nums[leftBorder] === target) {
        returnValue = leftBorder
      } else {
        returnValue = rightBorder
      }
    } else if(target > nums[border]){
      leftBorder = border;
    } else if(target < nums[border]) {
      rightBorder = border;
    } else {
      returnValue = border;
    }
  }

  return returnValue;
}

//console.log(searchInsert([1,2,3,5,6,7,8], 4))
console.log(searchInsert([1,3,5], 2))