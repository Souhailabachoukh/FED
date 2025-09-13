// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header > button")
const navMenu = document.querySelector("header nav")

menuButton.addEventListener("click", toonMenu);

function toonMenu () {
  console.log("menu geopend")
  navMenu.classList.toggle("toonMenu");
}

const sluitButton = document.querySelector("nav button")

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu () {
  console.log("menu gesloten")
  navMenu.classList.remove("toonMenu");
}


const subMenuButton = document.querySelector("nav ul:first-of-type li:nth-of-type(4) a")
const navSubMenu = document.querySelector("nav ul:nth-of-type(2)")

subMenuButton.addEventListener("click", toonSubMenu);

function toonSubMenu () {
  console.log("submenu geopend")
  navSubMenu.classList.toggle("toonSubMenu");
}