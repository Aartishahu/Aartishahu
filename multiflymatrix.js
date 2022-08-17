function multiflyofmat(a,b){
let n1=a.length;
let n2=b.length;
let m1=a[0].length;
let m2=b[0].length;
if(m1==n2){
    //console.log("true");
    const ans=[[],[]];
    for(let i=0;i<n1;i++){
        const temp=[];
        for(let j=0;j<m2;j++){
            var sum=0;
            for(let k=0;k<m1;k++){
              sum= sum + (a[i][k]*b[k][j]);
              //console.log(sum);
              //ans[i][j]=sum;
            }
            temp.push(sum);
           // console.log(temp);
        }
        ans.push(temp);
      // console.log(ans);
    }
console.log(ans);
}
}
const mat1=[
    [0,5,2],
    [-1,1,0],
    [7,4,3]];
    console.log(mat1);
const mat2  =  [[1,2],
                [0,4],
                [3,5]
                ];
                console.log(mat2);
multiflyofmat(mat1,mat2);