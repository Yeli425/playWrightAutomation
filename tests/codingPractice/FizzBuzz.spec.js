function main(){

let num=8
let result = fizzbuzz(num)

result.forEach(element => {
    console.log(element)
})
}


function fizzbuzz(num){

    let list = []

    for(let i=1; i<=num;i++){

        if(i%3==0){
            list.push('fizz')
        }else if(i%5==0){
            list.push('buzz')
        }else if(i%3==0 && i%5==0){
            list.push('fizzbuzz')
        }else{
            list.push(i.toString())
        }
    }

    return list

}


main()