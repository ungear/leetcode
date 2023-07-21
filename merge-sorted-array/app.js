//https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  const result = [];
  const nums1Data = nums1.slice(0,m);
  while(result.length < m + n) {
      const num1El = nums1Data[0];
      const num2El = nums2[0];

      if(num1El <= num2El || num2El === undefined){
        result.push(num1El);
        nums1Data.shift();
      } else {
        result.push(num2El);
        nums2.shift();
      }
  }

  result.forEach((x, index) => {
      nums1[index] = x;
  })
};

const num1 = [1,2,3,0,0,0];
const result = merge(num1, 3, [2,5,6], 3);
console.log(num1)