function main(){

const s='[{()}]'

console.log(stringBalance(s))

}

function stringBalance(s){

    let stack = []
for(let i=0; i<s.length; i++){

    if(s.charAt(i)=='(' || s.charAt(i)=='{' ||s.charAt(i)=='['){
        stack.push(i)
    }else{
        if(stack.length==0){
            return false;
        }
    let lastOut=stack.pop()

    if(lastOut=='(' && s.charAt(i)!=')'){
        return false;
    }else if(lastOut=='{' && s.charAt(i)!='}'){
        return false;
}else if(lastOut=='[' && s.charAt(i)!=']'){
    return false;
}
}
}
return stack.length==0;
}


main()