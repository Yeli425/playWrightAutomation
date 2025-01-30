function main(){

let s =["12","3","1"]

findMax(s)
}


function findMax(s){

    let max=0;

    for(let i=0; i<s.length; i++){

        let num=parseInt(s[i])

        if(max<num){
            max=num
        }
    }

        console.log(max)
}

main()