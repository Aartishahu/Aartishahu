function transposearray(matrix){
    let row=matrix.length;
    let column=matrix[0].length;
    for(let i=0;i<(row/2);i++){
        for(let j=0;j<column;j++){
           swap(matrix[i][j],matrix[row-1-i][j]);
        }
    }
    return matrix;
}
const result=transposearray(
    [1,2,3,4,
    5,6,7,8,
     9,10,11,12,
    13,14,16,17]
);
console.log(result);