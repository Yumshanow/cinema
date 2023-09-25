const schemeSvg = document.querySelector(".scheme-svg");
const priceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const filmtrailer = document.querySelector(".film-trailer");

let cost = 500;
let price = 0;
schemeSvg.addEventListener("click", (event) => {
    if(!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let seats = schemeSvg.querySelectorAll(".active").length;
    price = seats * cost;
    priceTag.textContent = price;
    }
});
menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});

filmtrailer.addEventListener ("click", () => {
    Fancybox.bind("[data-fancybox]", {
      });
      
});
