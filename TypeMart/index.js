"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = "shirt";
let shipping = 5;
let taxPercent = .05;
let taxTotal;
let total;
let shippingAddress = "123 W. Street St. New York, New York";
const product = products_1.default.filter(product => product.name === productName)[0];
if (product.preOrder === "true")
    console.log("Your order will be shipped soon!");
if (Number(product.price) >= 25) {
    shipping = 0;
}
;
if (shippingAddress.match("New York")) {
    taxPercent = .1;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("Product Name: ", product.name);
console.log("Shipping address: ", shippingAddress);
console.log("Price of the product: ", Number(product.price));
console.log("Tax total: ", taxTotal);
console.log("Shipping: ", shipping);
console.log("Total amount: ", total);
