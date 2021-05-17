"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CLASSES =========================
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
}
// EXECUTION =======================
const autonomousCar = new Car({ isRunning: true });
console.log("Autonomous Car: ", autonomousCar);
