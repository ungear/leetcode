// solution for https://leetcode.com/problems/binary-tree-right-side-view

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root === null) return [];
    const result = [root.val];
    let queue = [root];
    while(queue.length){
      const newLayer = [];
      for(let n of queue){
        if(n.left)
          newLayer.push(n.left);

        if(n.right)
          newLayer.push(n.right);
      }
      if(newLayer.length){
        const rightmostNode = newLayer[newLayer.length -1];
        result.push(rightmostNode.val);
      }
      queue = newLayer;
    }


    return result;
};