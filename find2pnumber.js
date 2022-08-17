function isprime(n){
    for(i=2;i<n;i++){
        if(n%2==0){
            return false;
        }
    }
    return true;
}
function find2pnum(a){
    for(i=2;i<a-2||a<5;i++){
        if(isprime()&& isprime(a-1)){
            console.log(i,a-i);
            return;
        }
    }
}
find2pnum(13);