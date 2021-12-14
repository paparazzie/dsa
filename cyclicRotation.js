function rotate (A, K) {
  //  A = [3,4,5,6,7]

  if(A.length > 0 && A.length < 100 && K === parseInt(K,10) && K > 0 && K < 100){

    for(var i = 0; i < K; i++){
        let lastElement = A[A.length - 1];
        A.pop()
        A.unshift(lastElement)

    }

  }

return A;


}

rotate([1, 2, 3, 4, 5, 6], 3)