function maxNum(arr){
    if(!arr || arr?.length === 0){
        return 0;
    }

    let max = arr[0];
    
    for(let i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    return max;
}

const array = [10, 4, 100, 90, 150, 25];

console.log(maxNum(array));

/* ----------- Solution 2 -------------- */

console.log(Math.max(...array));