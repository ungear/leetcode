// https://leetcode.com/problems/rotate-image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const originalMatrixClone = Array(matrix.length).fill(null).map(x => []);
  matrix.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
          originalMatrixClone[rowIndex][columnIndex] = cell;
      })
  })

  const result = Array(matrix.length).fill(null).map(x => []);

  originalMatrixClone.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
          const newRowIndex = columnIndex;
          const newColunmIndex = matrix.length - 1  - rowIndex;

          matrix[newRowIndex][newColunmIndex] = cell;
      })
  })

  return result;
};

const input = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(input))