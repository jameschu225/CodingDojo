// Debug the following code that removes negative values from an array

let newArr = []
function removeNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);