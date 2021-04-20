"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
            break;
        case orders_1.PriceBracket.Medium:
            return 20.0;
            break;
        case orders_1.PriceBracket.High:
            return 30.0;
            break;
        default:
            return "None";
    }
}
/// Add your getOrders() function below:
/// Add your printOrders() function below:
/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
