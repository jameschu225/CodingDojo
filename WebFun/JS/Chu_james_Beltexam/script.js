function goprevious(){
    let currentview = document.querySelector('#currentview');
    currentview.src = "images/pixel-ninjas-2.png";
}
function gonext(){
    let currentview = document.querySelector('#currentview');
    currentview.src = "images/stonepunk.png";
}
function buy(){
    let currentcount = document.querySelector('#cartcount');
    let currentcart = parseInt(currentcount.innerText);
    currentcart += 1;
    currentcount.innerText = currentcart;
}
function warm(){
    alert("This game is supported on Linux")
}