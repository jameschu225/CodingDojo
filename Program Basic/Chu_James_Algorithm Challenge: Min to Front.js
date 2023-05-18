function minToFront(arr){
    let min = arr[0];
    for (let j = 0; j < arr.length; j++){
        if (min > arr[j]){
            min = arr[j];
            minindex = j;
        }
    }
    console.log(min);
    console.log(minindex)

    let temp = 0
    for ( let i = minindex; i >0; i--){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        console.log(arr)
    }
    return arr
}
result = minToFront([4,2,1,3,5]);
console.log(result);