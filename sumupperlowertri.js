function sumoftriangle(matrix){
    let sum_lower =0;
    let sum_uper=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<=i;j++){
            sum_lower+=matrix[i][j];
            console.log(i,j);
        }
    
        for(let j=i;j<matrix[i].length;j++){
            sum_uper+=matrix[i][j];
        }
    }
    console.log(sum_lower);
    console.log(sum_uper);
}
sumoftriangle([
    [2,15,4],
    [1,2,15],
    [2,10,7]
]);