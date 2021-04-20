import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket){
    switch (price) {
        case PriceBracket.Low:
            return 10.0;
            break;
        case PriceBracket.Medium:
            return 20.0;
            break;
        case PriceBracket.High:
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
