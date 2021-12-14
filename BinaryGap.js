function solution(N){

    if(N === parseInt(N,10) && N >=1 && N <= 51272){

        BinaryArray = N.toString(2).split('')
        console.log(BinaryArray)
        return getGaps(BinaryArray, []);
    }

}

function getGaps(Binary, gaps){

    let firstOne = Binary.indexOf("1")

    if(firstOne > -1){

        const newArray = Binary.slice(firstOne + 1)

        const second0ne = newArray.indexOf("1");

        if(second0ne > 0){

            gaps.push(second0ne)
            console.log(gaps)

        }
    
        return getGaps(newArray.slice(second0ne), gaps)
        
    }

    console.log(gaps)
    return (gaps.length > 0) ? Math.max.apply(Math,gaps) : 0


}

console.log(solution(15))