"use strict";
window.addEventListener("load", start);
// 1. Lav en liste med tre `product`-objekter. Hvert objekt har
// følgende properties: `name` (string), `price` (number) og `inStock` (boolean).

const productList = [
  { name: "trashbag", price: 5.95, inStock: true },
  { name: "towel", price: 8, inStock: false },
  { name: "cake", price: 110, inStock: true }
];

// 2. Lav en funktion der viser listen af alle `product`-objekter
// - vis kun produkter hvor `inStock` er `true`.

function start() {
  showProducts();

  document.querySelector("#create-form").addEventListener("submit", createProduct);

  // createProduct();
}

function showProducts() {
  for (const product of productList) {
    console.log(product);
    if (product.inStock) {
      showProduct(product);
    }
  }
}

function showProduct(product) {
  const html = /*HTML*/ `
  <ul>
  <li>product: ${product.name} - price: ${product.price}kr</li>
  </ul>

    `;
  document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
}

// 3. Lav en funktion der ved hjælp af formularen, opretter et
// nyt `product`-objekt og tilføjer det til listen. Listen på
// websiden opdateres hver gang, der opretteres et nyt objekt.

function createProduct(event) {
  console.log("hello create");
  event.preventDefault();

  const form = event.target;

  const newProduct = {
    name: form.name.value,
    price: Number(form.price.value),
    inStock: form.inStock.value === "true"
  };

  document.querySelector("#list-container").innerHTML = "";

  productList.push(newProduct);
  console.log(productList);
  showProducts();
}
