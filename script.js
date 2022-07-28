const open = document.querySelector("#open")
const close = document.querySelector("#close")
const container = document.querySelector(".container")

function showNav() {
  container.classList.add("show-nav")
}

function hideNav() {
  container.classList.remove("show-nav")
}

open.addEventListener("click", showNav)
close.addEventListener("click", hideNav)
