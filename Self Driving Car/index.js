"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
// CLASSES =========================
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
    respond(events) {
        !this.isRunning ? console.log("The car is off") : undefined;
    }
}
// EXECUTION =======================
const autonomousCar = new Car({ isRunning: true });
autonomousCar.respond(computer_vision_1.getObstacleEvents());
