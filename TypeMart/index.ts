import products from "./products"

const productName: string = "shirt";
let shipping: number = 5;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string;

const product = products.filter(product => product.name === productName)[0];

console.log(product);

if(product.preOrder === "true") console.log("Your order will be shipped soon!")

if(Number(product.price) >= 25) {
    shipping = 0
    console.log("This product qualifies for free shipping!")
};