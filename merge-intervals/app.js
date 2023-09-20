//solution for https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const result = [];
  while(intervals.length){
    const currentInterval = intervals[0];
    let hasIntersections = false;
    for(let x = 1; x < intervals.length; x++){
      const vis = intervals[x];
      // cur includes vis => remove vis
      if(currentInterval[0] <= vis[0] && currentInterval[1] >= vis[1]){
        intervals.splice(x,1);
        x--;
      } 
      // vis includes cur => remove cur
      else if(currentInterval[0] >= vis[0] && currentInterval[1] <= vis[1]){
        hasIntersections = true;
        break;
      }
      // cur intersects vis to the left => merge and push merged
      else if(currentInterval[0] <= vis[0] && currentInterval[1] >= vis[0]){
        intervals.push([currentInterval[0], vis[1]]);
        intervals.splice(x,1);
        x--;
        hasIntersections = true;
        break;
      }

      // cur intersects vis to the right => merge and push merged
      else if(currentInterval[0] <= vis[1] && currentInterval[1] >= vis[1]){
        intervals.push([vis[0], currentInterval[1]]);
        intervals.splice(x,1);
        x--;
        hasIntersections = true;
        break;
      }
    }
    
    intervals.splice(0,1);

    if(!hasIntersections) result.push(currentInterval);
  }

  return result;
};

const input = [[1,3],[0,2],[2,3],[4,6],[4,5],[5,5],[0,2],[3,3]];
const output = merge(input);

