import products from "./products"

const productName: string = "shirt";
let shipping: number = 5;
let taxPercent: number = .05;
let taxTotal: number;
let total: number;
let shippingAddress: string = "123 W. Street St. New York, New York";

const product = products.filter(product => product.name === productName)[0];

if(product.preOrder === "true") console.log("Your order will be shipped soon!")

if(Number(product.price) >= 25) {
    shipping = 0
};

if(shippingAddress.match("New York")) {
    taxPercent = .1;
}

taxTotal = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping;

console.log("Product Name: ", product.name)
console.log("Shipping address: ", shippingAddress)
console.log("Price of the product: ", Number(product.price))
console.log("Tax total: ", taxTotal)
console.log("Shipping: ", shipping)
console.log("Total amount: ", total)