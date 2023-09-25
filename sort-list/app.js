// solution for https://leetcode.com/problems/sort-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// dumb but working solution. Might be improved to get rid of .sort()
var sortList = function(head) {
    if(head === null) return null;
    const items = [];
    let node = head;
    while(node){
      items.push(node);
      node = node.next;
    }

    items.sort((a,b) => a.val - b.val);

    let result = items[0];

    for(let i = 1; i < items.length; i++){
      items[i-1].next = items[i];
    }

    items[items.length-1].next = null;

    return result;
};

const input = {
  val: 3,
  next: {
    val: 1,
    next: null 
  }
}
sortList(input);