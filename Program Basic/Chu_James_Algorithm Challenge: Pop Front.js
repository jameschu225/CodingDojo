function popFront(arr){
let temp = arr[0];
arr.shift(arr[0])
console.log(arr)
console.log(temp)
return (`pop# ${temp}, arr: ${arr}`)
}
console.log(popFront([5, 93, 22, 4]))