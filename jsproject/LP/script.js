//for the toggle buttton
const toggle = document.getElementById('toggle')
//for the close button
const close = document.getElementById("close");
//for the open button
const open = document.getElementById("open");
//for the modal
const modal = document.getElementById("modal");

//ofr the toggle navigattion 
toggle.addEventListener("click", () =>
    document.body.classList.toggle("show-nav")
);
//for the show modal
open.addEventListener("click", () => modal.classList.add('show-modal'));

//for the close button to hide the modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("show-modal") : fales
    );