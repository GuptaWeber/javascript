function secondLargest(arr){
    let max = arr[0];
    let secondMax = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } else if(arr[i] > secondMax){
            secondMax = arr[i]
        }
    }

    console.log({
        max, secondMax
    })
}

secondLargest([9, 10, 2, 4, 5,6])