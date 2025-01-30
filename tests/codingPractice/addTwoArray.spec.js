function main(){
    let a1=[1]
    let a2=[2]
    addTwoArray(a1,a2)
}

function addTwoArray(a1,a2){
    let newArr=[a1.length+a2.length]
    let count=0

    for(let i=0; i<a1.length; i++){
        newArr[i]=a1[i]
        count++
    }

    for(let i=0; i<a2.length; i++){
        newArr[count]=a2[i]
        count++
    }

    console.log(newArr)
}

main()