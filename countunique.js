function countuniqarr(array){
let i=0;
    if(array.length>0){
    
    for(let j=1;j<array.length;j++){
        if(array[i]!=array[j]){
            i++;
            array[i]=array[j];
    }
}
 return i+1;   
}else{
    console.log("array is empty");
}

}
const result=countuniqarr([1,1,2,2,3,4,4,5,6,7,8,8]);
console.log(result);