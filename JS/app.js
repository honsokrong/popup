//button
const btnGogoole = document.querySelector(".btn-google");
const btnCancel = document.querySelector(".btn-cancel");
const btnConfirm = document.querySelector(".btn-confirm");

//Modal
const Modal = document.querySelector(".modal");

//Overlay
const Overlay = document.querySelector(".overlay");
//add event
btnGogoole.addEventListener("click",function(){
   Modal.classList.add(".active");
   Overlay.classList.add(".active");
})