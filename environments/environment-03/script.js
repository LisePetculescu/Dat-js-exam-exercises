// Environment: `environment-03`
"use strict";
window.addEventListener("load", start);

// 1. Lav en liste med tre `product`-objekter.
// Hvert objekt har følgende properties: `name` (string),
// `price` (number) og `inStock` (boolean).
const productList = [
  { name: "Taske", price: 444, inStock: true },
  { name: "Sko", price: 33, inStock: false },
  { name: "Ur", price: 2034, inStock: true }
];

function start() {
  console.log("hello test 8");

  showProducts();
}

// 2. Lav en funktion der viser listen af alle `
// product`-objekter på websiden.

function showProducts() {
  console.log("show loop");

  for (const product of productList) {
    showProduct(product);
  }
}

function showProduct(product) {
  console.log("show them");

  const html = /*html*/ `
    <p>Product: ${product.name}, ${product.price}kr</p>
    `;

  document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der kan sortere listen efter
// `name`, `price` og `inStock`. Sorteringen skal ske på baggrund af valgte `option` i `select` (se `environment-03`). Sortering ændrer sig hver gang en ny sortering `option` vælges.
