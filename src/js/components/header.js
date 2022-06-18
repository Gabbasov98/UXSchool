let body = document.querySelector("body")
let header = document.querySelector(".header")
let headerLogo = document.querySelector(".header__logo")
let burger = document.querySelector(".header__burger")



burger.onclick = function() {
    body.classList.toggle("fixed-body")
    header.classList.toggle("header--open")
    headerLogo.classList.toggle("header__logo--white")
    burger.classList.toggle("header__burger--active")
}