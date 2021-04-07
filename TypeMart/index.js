"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = "fanny pack";
const product = products_1.default.filter(product => product.name === productName)[0];
console.log(product);
if (product.preOrder)
    console.log("Your order will be shipped soon!");
