function changename(){
    let newname = document.querySelector("#username");
    newname.textContent = "John Doe";
}
function removerequest(element){
    let removename = element.closest(".requester");
    let requestnum = parseInt(document.querySelector(".requestcount").innerText)
    let acceptimg = element.alt;
    let yourconnectionnum = parseInt(document.querySelector(".connectioncount").innerText)
    requestnum -= 1;
    document.querySelector(".requestcount").innerText = requestnum;
    if (acceptimg === "accept"){
        yourconnectionnum += 1;
        document.querySelector(".connectioncount").innerText = yourconnectionnum;
        removename.remove();
    } else
    removename.remove();
}