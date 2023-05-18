var Rider_height = 43;
var Rider_age = 9;
var Height_Limit = 42;
var Age_Limit = 10;
let Result
    if (Rider_height >= Height_Limit && Rider_age >= Age_Limit) {
        Result = 'The rider is tall enough and old enough to ride the rollercoaster.';
    } else {
        Result = 'The rider is not legal to ride the rollercoaster.';
    }
    console.log(Result)