function main(){

    let num=8
    fibonabi(num)
}



function fibonabi(num){

    let a=0, b=1, count=0

    while(count!=num){
        process.stdout.write(a+" ")

        let c= a+b
        a=b
        b=c
        count++
    }
}

main()