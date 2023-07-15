// https://leetcode.com/problems/snail-traversal/submissions/

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if(rowsCount*colsCount !== this.length) return [];
  const result = [];
  let resultRow = 0;
  let resultCol = 0;
  let isMovingDown = true;
  this.forEach(x => {
      if(!result[resultRow]){
          result[resultRow] = [];
      }
      result[resultRow][resultCol] = x;
      if(isMovingDown) {
          if(resultRow === rowsCount - 1){
              resultCol++;
              isMovingDown = false;
          } else{
              resultRow++;
          }
      } else {
          if(resultRow === 0) {
              resultCol++;
              isMovingDown = true;
          } else {
              resultRow--;
          }
      }
  })

  return result;
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
arr.snail(5,4);
