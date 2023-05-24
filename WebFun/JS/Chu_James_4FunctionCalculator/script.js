let equation = "";
function press(element){
    var displayDiv = document.querySelector("#display");
        if (displayDiv.innerText == 0){
            displayDiv.innerText = element;
        } else {
            displayDiv.innerText = displayDiv.innerText + element;
        }
}
function clr(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = 0;
    equation = "";
}
function setOP(OP){
    var displayDiv = document.querySelector("#display");
    let x = parseInt(displayDiv.innerText);
    equation = x + OP;
    displayDiv.innerText = " ";
}
function calculate(){
    var displayDiv = document.querySelector("#display");
    let y = parseInt(displayDiv.innerText);
    let result = eval(equation + y);
    displayDiv.innerText = result;
}