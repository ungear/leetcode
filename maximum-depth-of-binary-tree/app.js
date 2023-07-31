//https://leetcode.com/problems/maximum-depth-of-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if(root === null) return 0;
  let queue = [root];
  let depth = 0;

  while(queue.length > 0){
      depth++;
      const nextQueue = [];
      queue.forEach((x) => {
          if(x.left) nextQueue.push(x.left);
          if(x.right) nextQueue.push(x.right);
      });
      queue = nextQueue;
  }

  return depth;
};