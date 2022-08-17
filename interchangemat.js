function interchangematrix(matrix){
let row=matrix.length;
let column=matrix[0].length;
for(let i=0;i<(row/2);i++){
    for(let j=0;j<column;j++){
        matrix[row-1-i][j]=matrix[i][j];
    }
}
return matrix;
}
const mat=[[1,2,3,4],
           [5,6,7,9],
           [3,4,5,6],
           [1,0,1,0]];

console.log(interchangematrix(mat));