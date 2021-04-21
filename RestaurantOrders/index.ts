import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket):number {
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
    }
}

/// Add your getOrders() function below:
function getOrders(price:PriceBracket, orders: Order[][]):any {
    let filteredOrders: Order[][]= []

    const result: Order[] = orders[0].filter( (order:Order) => order.price <= getMaxPrice(price))
}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);