function transposearray(matrix){
   const result=Array.from({length: matrix[0].length},()=>new Array(matrix.length).fill(0));
    let n=matrix.length;
   let column=matrix[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<column;j++){
           result[j][i]=matrix[i][j];
           //console.log(result);
        }
    }
 return result;
}
console.log(transposearray([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]]
    
));