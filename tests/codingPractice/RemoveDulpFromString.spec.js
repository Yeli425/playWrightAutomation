function main(){


let s='aabbcc'


removeDulp(s)
}


function removeDulp(s){

    let unique= new Set()

    let result=''
    for(let i=0; i<s.length; i++){

        unique.add(s.charAt(i))

    }

   for(const each of unique){
    result+=each
   }

   console.log(result)
}


main()