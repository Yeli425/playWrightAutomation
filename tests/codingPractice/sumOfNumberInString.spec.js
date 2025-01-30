function main(){

let s='a123b0c12'

sumOfNumberInString(s)

}


function sumOfNumberInString(s){

let sum=0
let temp=""
for(let i=0; i<s.length; i++){

    if(!isNaN(s[i])){
        temp+=s[i]
    }else {
        if(temp!=""){
            sum+=parseInt(temp)
            temp=""
        }
       
    }
}

if(temp!=""){
    sum+=parseInt(temp)
}
console.log(sum)
}


main()