// JavaScript Document
console.log("hi");

/*hamburgermenu*/
const menuButton = document.querySelector("header li button:first-of-type")
const navMenu = document.querySelector("header nav")

menuButton.addEventListener("click", toonMenu);

function toonMenu () {
  console.log("menu geopend")
  navMenu.classList.toggle("toonMenu");
}


/*hamburgermenu sluiten*/
const sluitButton = document.querySelector("nav button")

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu () {
  console.log("menu gesloten")
  navMenu.classList.remove("toonMenu");
}


/*hamburgersubmenu*/
const subMenuButton = document.querySelector("nav ul:first-of-type li:nth-of-type(4) a")
const navSubMenu = document.querySelector("nav ul:nth-of-type(2)")

subMenuButton.addEventListener("click", toonSubMenu);

function toonSubMenu () {
  console.log("submenu geopend")
  navSubMenu.classList.toggle("toonSubMenu");
}

/*header div*/



