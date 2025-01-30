function main(){

const s =["elzat","lebron","elzat"]


findMostFre(s)


}


function findMostFre(s){

    let map = new Map()
    let result=""
    let max=0

    for(let i=0; i<s.length; i++){

        if(map.has(s[i])){

            map.set(s[i],map.get(s[i])+1)
        }else{

            map.set(s[i],+1)
        }

        if(max<=map.get(s[i])){
            max=map.get(s[i])
            result=s[i]
        }
    }

    console.log(result)

}


main()