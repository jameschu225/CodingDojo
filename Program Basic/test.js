// How do we know we need a loop here?
// because candy will give up every 2 mile and variable "mile" will only increase 1 at time.
// What's the starting point of the loop?
// function start at defin for loop and define variable. 
// When should the loop stop?
// loop will stop at 6 mile.
// How will the loop know when to stop?
// in for loop at condition will be set as stoping point.
// What's incrementing for each iteration of the loop?
// up tp programmer desing, practically 1 mile incremental for each iteration.
// What variables do we need?
// mile and candy will be the cariable

let candyGive = 0
let milePerHr = 4.5
for (let mileRun = 0; mileRun <= 6; mileRun += 1){
    if (mileRun > 0 && mileRun % 2 && milePerHr >= 5.5){
        candyGive += 1
        console.log(`Runner run ${mileRun} mile`, `Candy receive ${candyGive}`);
    } else {
        console.log(`Runner run ${mileRun} mile`, `Candy receive ${candyGive}`);
    }
}



let level = ""
function mygradelevel(score){
        if (score == 0 && score < 60){
            level = "F"
    }
    else if (score == 60 && score < 70){
        level = "C"
    }   
    else if (score == 70 && score < 80){
        level = "B"
    }
    else if (score == 80 && score < 101){
        level = "A"
    }
    else {
        return "Enter is not Valid"
    }
    return level
}

result = mygradelevel(60)
console.log("Level is at " + result)





function minToFront(arr){
    let temp = 0;
    for ( let i = 0; i < arr.length; i++){
        for ( let j = i+1; j < arr.length; j++){
            console.log(arr[i])
            console.log(arr[j])
            if(arr[i] < arr[j]){
                temp = arr[i];    
                arr[i] = arr[j];    
                arr[j] = temp;    
            } 
        console.log(arr);
        }
    }
}
result = minToFront([2,4,1,3,5]);
console.log(result)