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