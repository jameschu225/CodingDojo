
// function print68to9() {
//     // your code here
//     for (let i = 68; i >= 9; i--){
//         console.log(i)
//     }
// }

// // print68to9();

function findLargest(arr) {
    // your code here
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    return max
}
console.log(findLargest([12, 21, 3.6, 9, 12, 8]));


function countGreaterThanY(arr, y) {
    var count = 0;
    // your code here
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count ++
        }
    }
    return count;
}

console.log(countGreaterThanY([12, 21, 3.6, 9, 12, 8], 8));


for(var i=3; i<8; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log(i);
    }
}

for(var i=19; i>13; i--) {
    console.log(i);
    i -= 1;
}

for(var i=0; i<13; i++) {
    console.log(i);
    i += 2;
}