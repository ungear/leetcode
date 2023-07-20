//https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let numberOfIlands = 0;

  const rowsNumber = grid.length;
  const colsNumber = grid[0].length;
  const visitedGrid = new Array(grid.length).fill(null).map(x => []);

  for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[row].length; col++){
          if( grid[row][col] === '0' || visitedGrid[row][col] === true){
              continue;
          }
          numberOfIlands++;
          dfs(row, col);
      }
  }

  function dfs(row, col){
      visitedGrid[row][col] = true;
      const connectedCells = [];

      // top
      if(row !== 0 && grid[row-1][col] === '1' && visitedGrid[row-1][col] !== true) connectedCells.push([row-1, col]);
      
      // right 
      if(col+1 !== colsNumber && grid[row][col+1] === '1' && visitedGrid[row][col+1] !== true) connectedCells.push([row,col+1]);

      // bottom 
      if(row+1 !== rowsNumber && grid[row+1][col] === '1' && visitedGrid[row+1][col] !== true) connectedCells.push([row+1,col]);

      // left 
      if(col !== 0 && grid[row][col-1] === '1' && visitedGrid[row][col-1] !== true) connectedCells.push([row,col-1]);


      connectedCells.forEach(x => {
        dfs(x[0], x[1]);
      })

    }
    return numberOfIlands;

  // const graph = new Map();
  // grid.forEach((row, rowIndex) => {
  //     row.forEach((cell, colIndex) => {
  //         graph.set([rowIndex, colIndex], { value: cell, isVisited: false });
  //     })
  // })

  // graph.forEach((node, key) => {
  //   if(node.isVisited) return;
  //   if(node.value === '0') return;
    
  //   dfs(node, key);
  // })

  // function dfs(node, key){
  //   node.isVisited = true;

  //   const neighbours = [];
  //   if(key[0] !== 0 && )
  // }
  // graph.forEach((node, key) => {
  //   const [row, col] = key;
  //   const neighbours = [];
  //   if()
  // })
};

const input = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]

  // ["1","1","1","1","0"],
  // ["1","1","0","1","0"],
  // ["1","1","0","0","0"],
  // ["0","0","0","0","0"]
];
const result = numIslands(input);
console.log(result);