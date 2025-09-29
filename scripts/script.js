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

const backButton = document.querySelector("header nav button:nth-of-type(2)");
const subMenuTitel = document.querySelector("header nav h2:first-of-type");

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


/*chatbot uitklappen*/
const helpButton = document.querySelector("main section:first-of-type > button:first-of-type");
const helpDialog = document.querySelector("main dialog");

if (helpButton && helpDialog)
helpButton.addEventListener("click", () => {
  helpDialog.show();
});


/*chatbot uitklappen homepagina*/
const helpButton2 = document.querySelector("main > button:first-of-type");

if (helpButton2 && helpDialog)
helpButton2.addEventListener("click", () => {
  helpDialog.show();
});


/*Kleur kiezen met juiste carousel*/
const optieReflection = document.querySelector ('input[value="reflection"]')
const optieGreen = document.querySelector ('input[value="green"]')

const reflectionCarousel = document.querySelector (".productpagina main section:first-of-type ul:nth-of-type(2)")
const greenCarousel = document.querySelector (".productpagina main section:first-of-type ul:nth-of-type(3)")


optieReflection.addEventListener('click', showCarouselReflection)
optieGreen.addEventListener('click', showCarouselGreen)


function showCarouselReflection() {
  reflectionCarousel.style.display = "flex";   
  greenCarousel.style.display = "none";        
  console.log("Reflection carousel zichtbaar");
}

function showCarouselGreen() {
  greenCarousel.style.display = "flex";       
  reflectionCarousel.style.display = "none"; 
  console.log("Green carousel zichtbaar");
}


/*geluidje bij winkelwagenknop*/
const winkelWagenKnop = document.querySelector(".productpagina main section:first-of-type > button:nth-of-type(3)")

winkelWagenKnop.addEventListener('click', winkelwagenAudio)

function winkelwagenAudio () {
    const audio = new Audio("./audio/cashgeluid.mp3");
    audio.play();
}


/*flipcard - maak je look af*/
const card = document.querySelector('.eerstekaart');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});


/*animatie +1 bij winkelwagen*/
winkelWagenKnop.addEventListener('click', addToShoppingCart)

function addToShoppingCart() {
    let shoppingCartAmount = document.querySelector("header > ul:first-of-type li:nth-of-type(5) span");
    let currentAmount = shoppingCartAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    shoppingCartAmount.innerHTML = newAmount;

    shoppingCartAmount.classList.add("updated");

    setTimeout(function(){
  shoppingCartAmount.classList.remove("updated");
 }, 400);
}



