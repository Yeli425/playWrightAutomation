function main(){


const arr=[-1,0,1,-1,2,3,-3]

subSetOfThreeDigit(arr)
}


function subSetOfThreeDigit(n){

    for(let i=0; i<n.length; i++){

        for(let j=i+1; j<n.length; j++){

            for(let k=j; k<n.length; k++){

                if(n[i]+n[j]+n[k]==0){
                    console.log(n[i]+" "+n[j]+" "+n[k])
                    
                }
            }
        }
    }
}


main()