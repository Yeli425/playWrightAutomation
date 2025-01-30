function main(){

let s="elzaT"

findUpperAndLower(s)
}


function findUpperAndLower(s){

let upper=0;
let lower=0;

for(let i=0; i<s.length; i++){

    if(s.charAt(i)>='A' && s.charAt(i)<='Z'){
        upper++;
    }else{
        lower++;
    }
}

console.log("upper is: "+upper)
console.log("lower is: "+lower)
}


main()


