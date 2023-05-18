// Print odds 1-20
for (i =1; i<=20; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}
// Decreasing multiples of 3
for (i= 100 ; i>=0; i--){
    if (i % 3 ==0){
        console.log(i)
    }
}
// Print the sequence
for (i=4; i>=-3.5; i=i-0.5){
    if (i==4){
        console.log(i)
    } else if (i ==2.5){
        console.log(i)
    } else if (i==1){
        console.log(i)
    } else if ( i==-0.5){
        console.log(i)
    } else if (i==-2){
        console.log(i)
    } else if (i==-3.5){
        console.log(i)
    }
}
// Sigma
let sum = 0;
for (i=1; i <=100; i++){
    sum = sum + i;
}
console.log(sum)
// Factorial
let prodcut = 1;
for (i=1; i<=12; i++){
    prodcut = prodcut * i;
}
console.log(prodcut)