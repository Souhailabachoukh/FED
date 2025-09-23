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
const navSubMenu = document.querySelector("nav ul:nth-of-type(3)")

subMenuButton.addEventListener("click", toonSubMenu);

function toonSubMenu () {
  console.log("submenu geopend")
  navSubMenu.classList.toggle("toonSubMenu");
}

/*hamburgersubmenu2*/
const subMenuButton2 = document.querySelector("nav ul:nth-of-type(3) li:nth-of-type(2) a")
const navSubMenu2 = document.querySelector("nav ul:nth-of-type(4)")

subMenuButton2.addEventListener("click", toonSubMenu2);

function toonSubMenu2 () {
  console.log("submenu2 geopend")
  navSubMenu2.classList.toggle("toonSubMenu2");
}


/*flipcard - maak je look af*/
const card = document.querySelectorAll('.eerstekaart');

[...card].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


