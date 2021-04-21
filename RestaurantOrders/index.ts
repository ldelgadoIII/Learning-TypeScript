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

    orders.forEach( (restaurant:Order[]) => {
       const result:Order[] = restaurant.filter( (order:Order) => order.price <= getMaxPrice(price))
       filteredOrders.push(result);
    })
    
    return filteredOrders;
}

/// Add your printOrders() function below:

/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);