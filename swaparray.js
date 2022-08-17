function swaparr(array){
    for(i=0;i<array.length;i++){
        for(j=array.length-1;j>0;j--){
        [array[i],array[j]]=[array[j],array[i]];
    }
}
return array;
}
console.log(swaparr([1,2,3,4]));