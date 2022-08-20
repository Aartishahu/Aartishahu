const arr=[2,1,3,5];
let n=arr.length+1;
let num=4;
let ans=0;
for(i=1;i<=n+1;i++){
    ans=ans^i;

}
for(i=0;i<num;i++){
    ans=ans^arr[i];
}

/*var ans=n+1;
for(let i=1;i<n;i++){
    ans^=arr[i];
    ans^=(i+1);
}*/
console.log(ans);