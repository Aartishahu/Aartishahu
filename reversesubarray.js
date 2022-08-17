function canarraybesorted(array){
if(array.length===1)
{
    return true;
}

let startindex;
let j=0;
const decreasingarray=[];
for(let i=0;i<array.length;i++){
    if(array[i]>array[i+1]){
        startindex=i;
        break;
    }
}
let endindex;
for(let i=startindex;i<array.length;i++){
    if(array[i]<array[i+1]||i==array.length){
        endindex=i;
        break;
    }
}

for(let i=startindex;i<endindex;i++){
    decreasingarray[j]=array[i];
    j++;
}
console.log("decreasing array:",decreasingarray);
for(let i=decreasingarray.length;i>=0;i--){
    array[startindex]=decreasingarray[i];
    startindex++;
}
console.log("main array after reverse:",array);
for(let i=0;i<array.length-1;i++){
    if(array[i]>array[i+1]){
        console.log(false);
        return;

    }
    console.log(true);
}

}
canarraybesorted([1,2,5,4,3,7]);
//canarraybesorted([1,2,4,5,3]);