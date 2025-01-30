function main(){

let inhabitants= [3, 6, 0, 4, 3, 2, 7, 1]

console.log(`Day 0 ${JSON.stringify(inhabitants)}`);
for(let i=1; i<inhabitants.length; i++){
    let sum=0
    for(let j=0; j<inhabitants.length; j++){
        if(inhabitants[j]>1){
            inhabitants[j]=Math.floor(inhabitants[j]/2)
        }else{
            inhabitants[j]=0
        }
    }
    for(let city of inhabitants){
        sum+=city
    }
    
    console.log(`Day ${i} ${JSON.stringify(inhabitants)}`);
    if(sum==0){
        console.log("-----EXTINCT---")
        break;
    }
    }
}
main()