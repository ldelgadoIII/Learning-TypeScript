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
function printOrders(restaurants:Restaurant[], orders:Order[][]){
    orders.forEach((order:Order[], index) => {
        if(order[index]){
            console.log(restaurants[index].name)
            order.forEach( (item, index) => console.log(`- Order ${index + 1}: $${item.price}`))
        }
    })
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
