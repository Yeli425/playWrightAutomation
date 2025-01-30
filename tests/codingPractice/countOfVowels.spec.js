function main(){
    let s='elzat'

    countOfVolve(s)
}

function countOfVolve(s){
let count=0
const volve = ['a','e','i','o','u']

for(let i=0; i<s.length; i++){
    if(volve.includes(s.charAt(i))){
        count++
        console.log(s[i])

    }
}
console.log(count)

}


main()