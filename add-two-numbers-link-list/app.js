//https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let extra = 0;
  
  let l1CurNode = l1;
  let l2CurNode = l2;
  let result = {};
  let isOver = false;
  let isFirst = true;
  let previousNode = {};
  while(!isOver){
      const newNode = {
          val: null,
          next: null,
      }
      const l1Val = l1CurNode?.val || 0;
      const l2Val = l2CurNode?.val || 0;
      const additionResult = l1Val + l2Val;
      
      if(additionResult + extra >= 10) {
          newNode.val = (additionResult + extra) % 10;
          extra = 1;
      } else {
          newNode.val = additionResult + extra;
          extra = 0;
      }

      if(isFirst) {
          result = newNode;
          isFirst = false;
          previousNode = newNode;
      } else{
          previousNode.next = newNode;
          previousNode = newNode;
      }
      
      l1CurNode = !!l1CurNode ? l1CurNode.next : null;
      l2CurNode = !!l2CurNode ? l2CurNode.next : null;
      if(l1CurNode === null && l2CurNode == null) {
          isOver = true;
          if(extra > 0){
              previousNode.next = {val: extra, next: null};
          }
      }
      console.log(result)
  }
  return result;
};