// function addlikeneil(){
//     let likecount = document.querySelector("#likecountneil")
//     let likenum= parseInt(likecount.innerText);
//     likenum++
//     likecount.innerText = `${likenum} like(s)`;
// }
// function addlikenichole(){
//     let likecount = document.querySelector("#likecountnichole")
//     let likenum= parseInt(likecount.innerText);
//     likenum++
//     likecount.innerText = `${likenum} like(s)`;
// }
// function addlikejim(){
//     let likecount = document.querySelector("#likecountjim")
//     let likenum= parseInt(likecount.innerText);
//     likenum++
//     likecount.innerText = `${likenum} like(s)`;
// }
function addlike(element){
    console.log(element)
    let likeperson = element.closest(".like");
    console.log(likeperson)
}