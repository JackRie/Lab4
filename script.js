"use strict";

// Vending Machine

let limeCola = document.querySelector(".lime-cola");
let saltedPeanuts = document.querySelector(".salted-peanuts");
let chocolateBar = document.querySelector(".chocolate-bar");
let fruitGummies = document.querySelector(".fruit-gummies");

let total = 0.0;

limeCola.addEventListener("click", () => {
  let amount = parseInt(limeCola.getAttribute("data-amount"));
  total += amount;
  let totalAmount = document.querySelector(".total-amount");
  totalAmount.innerText = total;
});

saltedPeanuts.addEventListener("click", () => {
  let amount = parseInt(saltedPeanuts.getAttribute("data-amount"));
  total += amount;
  let totalAmount = document.querySelector(".total-amount");
  totalAmount.innerText = total;
});

chocolateBar.addEventListener("click", () => {
  let amount = parseInt(chocolateBar.getAttribute("data-amount"));
  total += amount;
  let totalAmount = document.querySelector(".total-amount");
  totalAmount.innerText = total;
});

fruitGummies.addEventListener("click", () => {
  let amount = parseInt(fruitGummies.getAttribute("data-amount"));
  total += amount;
  let totalAmount = document.querySelector(".total-amount");
  totalAmount.innerText = total;
});

// Make Money
let coins = document.querySelector(".coin-container");
let form = document.querySelector(".make-money-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let howMany = data.get("how-many");
  let coin = data.get("coin");
  for (let i = 0; i < howMany; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = coin;
    coins.append(newDiv);
  }
  form.reset();
});

// Light Bulb
let on = document.querySelector(".on");
let off = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");
let lightBulb = document.querySelector(".light-bulb");

toggle.addEventListener("click", () => {
  lightBulb.classList.toggle("light-toggle");
});

on.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "#ffff66";
});

off.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "grey";
});

end.addEventListener("click", () => {
  lightBulb.style.display = "none";
  on.disabled = "true";
  off.disabled = "true";
  toggle.disabled = "true";
  end.disabled = "true";
});
