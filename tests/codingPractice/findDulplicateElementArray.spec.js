function main(){
    let array = [1,4,4,3]

    findDulp(array)
}


function findDulp(array){
    let unique = new Set()

    for(let i=0; i<array.length; i++){

        for(let j=i+1; j<array.length; j++){

            if(array[i]==array[j]){
                unique.add(array[i])
            }
        }
    }

    console.log(Array.from(unique))
}

main()