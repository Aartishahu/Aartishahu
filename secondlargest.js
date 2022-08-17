var max=0;
var second=0;
function largestarray(array){
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        second=max;
        max=array[i];
        
    }
    else if(array[i]>second){
        second=array[i];
    }
}
return second;
}
console.log(largestarray([8,5,6,11,90,33,11]));