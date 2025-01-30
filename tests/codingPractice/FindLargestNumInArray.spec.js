function main(){

    let num=[3,0,1]

    findLargest(num)
}



function findLargest(num){

    let max =num[0]

    for(let i=0; i<num.length; i++){
        if(max<num[i]){
            max=num[i]
        }
    }

    console.log(max)
}

main()