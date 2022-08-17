function singledigitsum(num){
    const numstr=num.toString();
     if(numstr.length==1){
     return numstr;}
     let sum=0;
     for(let i=0;i<numstr.length;i++){
         sum+=Number(numstr[i]);

     }
console.log(sum);
    
}
singledigitsum(12345);
