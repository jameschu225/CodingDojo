function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    if (numberOfPieces % numberOfPeople == 0){
        return "No leftovers for you!"
    } else if (numberOfPieces % numberOfPeople <= 2){
        return "You have some leftovers"
    } else if (numberOfPieces % numberOfPeople >= 3 && numberOfPieces % numberOfPeople <= 5){
        return "You have leftovers to share"
    } else if (numberOfPieces % numberOfPeople > 5){
        return "Hold another party!"
    }
}
console.log(howMuchLeftOverCake(12,4))