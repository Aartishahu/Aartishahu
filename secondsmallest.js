function secondsmallarray(arr){
    let small=100;
    let secondsmall=100;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            secondsmall=small;
            small=arr[i];
        }
        else if(arr[i]<secondsmall){
            secondsmall=arr[i];
        }
    }
    return small;
}
console.log(secondsmallarray([4,9,1,0,5]));