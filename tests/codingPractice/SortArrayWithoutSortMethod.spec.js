function main(){

const arr=[2,1,4,0]


sortArrat(arr)
}


function sortArrat(arr){


    for(let i=0; i<arr.length; i++){

            let min=i

    for(let j=i+1; j<arr.length; j++){

        if(arr[j]<arr[min]){
            arr[j]=min

            let temp= arr[min]
            arr[min]=arr[j]
            arr[j]=temp
        }
    }
    }

    console.log(arr)


}


main()