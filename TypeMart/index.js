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
console.log(product);
if (product.preOrder === "true")
    console.log("Your order will be shipped soon!");
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("This product qualifies for free shipping!");
}
;
if (shippingAddress.match("New York")) {
    taxPercent = .1;
    console.log("NYC Tax included.");
}
