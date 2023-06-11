// Environment: `environment-03`
"use strict";
window.addEventListener("load", start);

// 1. Lav en liste med tre `product`-objekter.
// Hvert objekt har følgende properties: `name` (string),
// `price` (number) og `inStock` (boolean).
const productList = [
  { name: "Sko", price: 444, inStock: true },
  { name: "Ur", price: 33, inStock: true },
  { name: "Taske", price: 2034, inStock: false }
];

function start() {
  console.log("hello test 8");

//   sortBySelected(); - virker ikke
  showProducts();
}

// 2. Lav en funktion der viser listen af alle `
// product`-objekter på websiden.

function showProducts() {
  console.log("show loop");
  document.querySelector("#list-container").innerHTML = "";
//   sortBySelected(); - virker ikke

  for (const product of productList) {
    showProduct(product);
  }
}

function showProduct(product) {
  console.log("show them");

  const html = /*html*/ `
    <p>Product: ${product.name}, ${product.price} kr</p>
    `;

  document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);

  document.querySelector("#select-sort-by").addEventListener("change", sortBySelected);
}

// 3. Lav en funktion der kan sortere listen efter
// `name`, `price` og `inStock`. Sorteringen skal ske på baggrund af valgte `option` i `select` 
// (se `environment-03`). Sortering ændrer sig hver gang en ny sortering `option` vælges.

function sortBySelected(event) {
    console.log(event.target.value);

    const selected = event.target.value;

    if (selected === "name" ) {
        console.log("hihi", selected);

        productList.sort((productA, productB) => productA[selected].localeCompare(productB[selected]))
    } else if (selected === "price" || selected === "inStock") {
      productList.sort((productA, productB) => productA[selected] - productB[selected]);
    }
    showProducts();

}
