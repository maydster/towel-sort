
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];

  if(!(Array.isArray(matrix))) return res;

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 != 0) matrix[i].reverse();
    res = matrix.flat();
  }
  
  return res;
}

