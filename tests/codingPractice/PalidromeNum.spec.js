function main(){

let num=12321

palidromeNum(num)
}


function palidromeNum(num){


let original =num
let reminder=0, reverse=0

while(num!=0){
    reminder=num%10
    reverse=reverse*10+reminder
    num=Math.floor(num/10)
}

if(original==reverse){
   console.log("true")
}else{
    console.log("false")
}
}

main()