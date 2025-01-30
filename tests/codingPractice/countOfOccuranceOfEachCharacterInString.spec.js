

function main(){

    let s = 'hi ho he'

occuranceOfEach(s)
}

function occuranceOfEach(s){
    let removeSpace = s.replaceAll(' ','')
    let freq = new Map()

    for(let i=0; i<removeSpace.length; i++){
        let char = removeSpace[i]
        if(freq.has(char)){
            freq.set(char, freq.get(char)+1)
        }else{
            freq.set(char,+1)
        }
    }

    for(const [key, value] of freq.entries()){
        console.log(key+"  "+value)
    }
}

main()