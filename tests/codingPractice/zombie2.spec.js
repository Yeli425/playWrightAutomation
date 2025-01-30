function main(){

let inhabitants = [3, 6, 0, 4, 3, 2, 7, 0 ];

let day=0
let sum
let length = inhabitants.length;
console.log(`day 0 ${JSON.stringify(inhabitants)}` )

do{
day++
sum=0
let temp = [...inhabitants]

for(let i=0; i<length; i++){

    if(inhabitants[i]==0 && i!=0 && i!=length-1){
        temp[i+1]=Math.floor(inhabitants[i+1]/2)
        temp[i-1]=Math.floor(inhabitants[i-1]/2)
    }else if(inhabitants[i]==0 && i==0){
        temp[i+1]=Math.floor(inhabitants[i+1]/2)
    }else if(inhabitants[i]==0 && i==length-1){
        temp[i-1]=Math.floor(inhabitants[i-1]/2)
    }
}

    inhabitants=[...temp]
    for(let city of inhabitants){
    sum+=city
    }

    console.log(`day ${day} ${JSON.stringify(inhabitants)}`)
   
if(sum==0){
    console.log('---EXCIENT-----')
    break;
}

}while(sum!=0)


}


main()