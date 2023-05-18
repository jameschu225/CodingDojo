function myalert(){
    alert("This page says\n\nLoading weather report...");
}
function remove(){
    let element = document.querySelector("#cookie");
    element.remove()
}
function convert(element){
    for (let i =1; i<= 4; i++){
        let hitempelement=document.querySelector(".hitemp" + i);
        let lowtempelement=document.querySelector(".lowtemp" + i);
        let hitemp = parseInt(hitempelement.innerText);
        let lowtemp = parseInt(lowtempelement.innerText);
        if (element.value == "°F"){
            hitempelement.innerText = Math.round((hitemp * 1.8) + 32) + "°";
            lowtempelement.innerText = Math.round((lowtemp * 1.8) + 32) + "°";
        } else {
            hitempelement.innerText = Math.round((hitemp - 32) / 1.8) + "°";
            lowtempelement.innerText = Math.round((lowtemp - 32) / 1.8) + "°";
        }
    }
}