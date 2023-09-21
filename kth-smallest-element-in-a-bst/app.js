//solution for https://leetcode.com/problems/kth-smallest-element-in-a-bst

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const values = [];
  dfs(root, values)
  return values[k-1];
};

function dfs(node, results){
  if(node.left) dfs(node.left, results);
  results.push(node.val);
  if(node.right) dfs(node.right, results);
}

// correct, but non-optimal BFS-based solution
// var kthSmallest = function(root, k) {
//   let queue = [root];
//   const values = [];
//   while(queue.length){
//     const node = queue.shift();
//     values.push(node.val);
//     if(node.left) queue.push(node.left);
//     if(node.right) queue.push(node.right);
//   }
//   values.sort((a,b) => a-b);
//   return values[k-1];
// };

const input = new TreeNode(
  5, 
  new TreeNode(3, 
    new TreeNode(2, new TreeNode(1)),
    new TreeNode(4)
  ),
  new TreeNode(6)
)

kthSmallest(input)