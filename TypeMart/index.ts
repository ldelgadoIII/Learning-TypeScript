import products from "./products"

let productName: string = "fanny pack";

const product = products.filter(product => product.name === productName)[0];

console.log(product);

if(product.preOrder) console.log("Your order will be shipped soon!")