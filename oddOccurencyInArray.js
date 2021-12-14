function solution(N) {
    if(N.length > 1){
        return oddOccurence(N)
   }
}

function oddOccurence(N) {
    let firstElement = N[0];
    N.shift(firstElement)

    if(N.includes(firstElement)){
      secondExactElement = N.indexOf(firstElement)
      N.splice(secondExactElement, 1)

        return (N.length > 1 )? oddOccurence(N) : N
    }
}

console.log(solution([1,2,1,2,5,3,3,3,5]))