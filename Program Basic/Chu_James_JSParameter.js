function greeting(callingPerson, callingTime){
    if (callingPerson == "Count Dooku"){
        return "I'm coming for you, Dooku!"
    } else {
        return 'Good day, ' + callingPerson + '! at ' + callingTime
    }
}
console.log(greeting("Count Dooku","7pm"))
