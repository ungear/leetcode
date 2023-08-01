//https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if(root === null) return root;
  const layers = [[root]];
  let queue = [root];
  //BFS to set up levels structure
  while(queue.length > 0){
      const newLayer = [];
      const newQueue = [];
      queue.forEach(x => {
          if(x.left) {
              newQueue.push(x.left);
              newLayer.push(x.left);
          };
          if(x.right) {
              newQueue.push(x.right);
              newLayer.push(x.right);
          }
      })
      queue = newQueue;
      if(newLayer.length > 0 ) layers.push(newLayer);
      
  };

  layers.forEach(layer => {
      layer.forEach((x, index) => {
          x.next = index === layer.length -1
              ? null
              : layer[index + 1]
      }) 
  })

  return root;
};

const input = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null, next: null },
    right: { val: 5, left: null, right: null, next: null },
    next: null
  },
  right: {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null, next: null },
    next: null
  },
  next: null
}
console.log(connect(input))