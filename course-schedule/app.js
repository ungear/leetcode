//https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // applying Kahn's algorithm to detect cyclic dependencies
  const incomingDegree = Array(numCourses).fill(0); // number of incoming edges for each node
  prerequisites.forEach(([to, from]) => {
    incomingDegree[to]++;
  })
  
  // queue list of leaf nodes
  const queue = []; 
  incomingDegree.forEach((indegree, index) => {
    if(indegree === 0) queue.push(index);
  })

  // cyclic dependencies deteceted from the very beginning
  //if(queue.length === 0) return false;

  while(queue.length > 0) {
    const currentNode = queue.shift();

    // remove the node from the graph and decrease indegree of all dependent nodes
    prerequisites
      .filter(([to, from]) => from === currentNode)
      .forEach(([to, from]) => {
        incomingDegree[to]--;
        if(incomingDegree[to] === 0) queue.push(to);
      })
  }

  const hasCyclicDeps = incomingDegree.filter(x => x > 0).length > 0;
  return !hasCyclicDeps;
};

const result = canFinish(4,[[0,1],[2,3],[1,2], [3,0]]);
console.log(result)