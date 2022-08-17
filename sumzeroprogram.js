function findsumpair(array){
    console.log(array);
    let left=0;
    let right=array.length-1;
    while(left<right){
       let sum=array[left]+array[right];
       console.log(sum);
       if(sum===0){
            return [array[right],array[left]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }

}
const result=findsumpair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);