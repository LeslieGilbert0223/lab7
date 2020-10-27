"use strict";

//////// Number 1 ////////
console.log("Number 1")

let total = 0;

let popButton = document.querySelector(".popButton");

popButton.addEventListener("click", ()=> {
    let popPrice = parseFloat(popButton.getAttribute("data-price"));
    total += popPrice;
    totalCostContainer.innerText = `Total: $${total}`;
    console.log(total.toFixed(2));
});

let snackButton = document.querySelector(".snackButton");

snackButton.addEventListener("click", ()=> {
    let snackPrice = parseFloat(snackButton.getAttribute("data-price"));
    total += snackPrice;
    totalCostContainer.innerText = `Total: $${total}`;
    console.log(total.toFixed(2));
});

let chocolateButton = document.querySelector(".chocolateButton");

chocolateButton.addEventListener("click", ()=> {
    let chocolatePrice = parseFloat(chocolateButton.getAttribute("data-price"));
    total += chocolatePrice;
    totalCostContainer.innerText = `Total: $${total}`;
    console.log(total.toFixed(2));
});

let fruitButton = document.querySelector(".fruitButton");

fruitButton.addEventListener("click", ()=> {
    let fruitPrice = parseFloat(fruitButton.getAttribute("data-price"));
    total += fruitPrice;
    totalCostContainer.innerText = `Total: $${total}`;
    console.log(total.toFixed(2));
});

let totalCostContainer = document.querySelector(".priceTotal");
totalCostContainer.innerText = `Total: $${total}`;


//////// Number 2 ////////
console.log("Number 2")

let makeMoney = document.querySelector(".money-maker"); //declare variable with class from form
makeMoney.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(makeMoney);
    let number = formData.get("number");
    let coin = formData.get("coin");
    let coinContainer = document.querySelector(".coin-container");
    // console.log(number, coin);
    for (let i = 0; i < number; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", coin);
        newDiv.innerText = coin;
        newDiv.classList.add("center-text");
        coinContainer.append(newDiv);
    }
    makeMoney.reset();
});


//////// Number 3 ////////
console.log("Number 3")
let lightBulb = document.querySelector(".light-bulb");
let lightBulbContainer = document.querySelector(".light-bulb-container");
let onbutton = document.querySelector(".onbutton")
let offbutton = document.querySelector(".offbutton")
let togglebutton = document.querySelector(".togglebutton")
let endbutton = document.querySelector(".endbutton")
let allButton = document.querySelectorAll(".light-button")


onbutton.addEventListener("click", () => {
    lightBulb.classList.add("on");
});

offbutton.addEventListener("click", () => {
    lightBulb.classList.remove("on");
});

togglebutton.addEventListener("click", () => {
    lightBulb.classList.toggle("on");
});

endbutton.addEventListener("click", () => {
    lightBulbContainer.removeChild(lightBulb);
    // lightBulb.remove();
    allButton.forEach((button) => {
        button.disabled = true;
    });
});