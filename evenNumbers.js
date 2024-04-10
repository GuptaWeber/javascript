function getEvenNumbers(arr){
    return arr.reduce((acc, curr) => {
        if(curr % 2 === 0){
            acc.push(curr)
            return acc
        }

        return acc
    }, []);
}

const array = [1,2,3,4,5,6,7,8,9,10];

console.log(getEvenNumbers(array));

/* ----------- Solution 2 -------------- */

function filterEvenNumbers(arr){
    return arr.filter(x => x%2 === 0)
}



console.log(filterEvenNumbers(array));