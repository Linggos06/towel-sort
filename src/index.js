
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0){
    return [];
  }
  const a = [];
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 !== 0){
      for(let j = matrix[i].length - 1; j >= 0; j--){
        a.push(matrix[i][j]);
        }
    }else{
      for(let j = 0; j < matrix[i].length; j++){
        a.push(matrix[i][j]);
        }
        }
  }
  return a;
}
