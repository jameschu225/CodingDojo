// alwaysHungry
function alwaysHungry(arr) {
    let yummycount = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy")
            yummycount +=1;
        }
    }
    if (yummycount == 0){
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i<arr.length; i++){
        if (cutoff<arr[i]){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for (i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    var count = 0;
    for (i=0; i<=arr.length; i++){
        if (avg<arr[i]){
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse
function reverse(arr) {
    let j = arr.length-1;
    for(i=0; i<j; i++){
        let A = arr[i];
        let B = arr[j];
        arr[i] = B;
        arr[j] = A;
        j--;
        }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci Arry
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=0; i<n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1])
        console.log(fibArr)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]