

let lay1 = document.querySelector(".lay-1");
let lay2 = document.querySelector(".lay-2");
let lay3 = document.querySelector(".lay-3");
let lay4 = document.querySelector(".lay-4");



function layOne() {
    lay1.classList.toggle("show");
    lay2.classList.remove("show");
    lay3.classList.remove("show");
    lay4.classList.remove("show");
}
function layTwo() {
    lay2.classList.toggle("show");
    lay1.classList.remove("show");
    lay3.classList.remove("show");
    lay4.classList.remove("show");
}
function layThree() {
    lay3.classList.toggle("show");
    lay1.classList.remove("show");
    lay2.classList.remove("show");
    lay4.classList.remove("show");
}
function layFour() {
    lay4.classList.toggle("show");
    lay1.classList.remove("show");
    lay2.classList.remove("show");
    lay3.classList.remove("show");
}
function remove() {
    lay1.classList.remove("show");
    lay2.classList.remove("show");
    lay3.classList.remove("show");
    lay4.classList.remove("show");
}
