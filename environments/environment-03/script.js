"use strict";

// # Øvelse 7

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties:
//  `name` (string), `price` (number) og `inStock` (boolean).

window.addEventListener("load", start);

const productList = [
  { name: "Purse", price: 4500, inStock: true },
  { name: "Dog Food", price: 65, inStock: false },
  { name: "Cat Toy", price: 550, inStock: true },
];

function start() {
  console.log("Hvordan får man en fisk til at grine?");

  console.log(productList);

  document.querySelector("#form-container").addEventListener("submit", addProduct);
  document.querySelector("#select-sort-by").addEventListener("change", sortBySelected);
  
  showProducts();
}

// 2. Lav en funktion der viser en sorteret liste af alle produkter.
//Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.

function showProducts() {
    document.querySelector("#list-container").innerHTML = "";
    // productList.sort((productA, productB) => productB.inStock - productA.inStock)
    console.log("Man putter den i kildevand", productList);
    for (const product of productList) {
        showProduct(product)
    }
}

function showProduct(product) {
    const html = /* html */ `
    <br>
    <li>${product.name} : ${product.price} kr</li>
    
    `
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
    // <li>${product.inStock}</li>
}

// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt
// og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

function addProduct(event) {
    event.preventDefault();

    const form = event.target;

    const newProduct = {
        name: form.name.value,
        price: Number(form.price.value),
        inStock: form.inStock.value === "true"
    }

    productList.push(newProduct);
    console.log(form.inStock.value);
}

function sortBySelected(event) {
    const selected = event.target.value;
    console.log(selected);
    if (selected === "name") {
        productList.sort((productA, productB) => productA.name.localeCompare(productB.name))
    } else if (selected === "inStock") {
        productList.sort(
          (productA, productB) => productB.inStock - productA.inStock);
    } else if (selected === "price") {
        productList.sort((productA, productB) => productA.price - productB.price)
    }
    showProducts();
}