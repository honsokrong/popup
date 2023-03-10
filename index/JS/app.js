//button
const btnGogoole = document.querySelector(".btn-google");
const btnCancel = document.querySelector(".btn-cancel");
const btnConfirm = document.querySelector(".btn-confirm");
const BtnClose = document.querySelector(".btn-close");
//Modal
const Modal1 = document.querySelector(".modal");

//Overlay
const Overlay = document.querySelector(".overlay");
//add event
btnGogoole.addEventListener("click",function(){
   Modal1.classList.add("active")
   Overlay.classList.add("active");
   
   // alert("Love Sokrong")
});
//remove
BtnClose.addEventListener("click",function(){
   // alert("Love Sokrong");
   Modal1.classList.remove('active')
   Overlay.classList.remove("active")
});
btnCancel.addEventListener("click",function(){
   Modal1.classList.remove('active')
   Overlay.classList.remove("active")
   // alert("Love Sorkrong");
})
