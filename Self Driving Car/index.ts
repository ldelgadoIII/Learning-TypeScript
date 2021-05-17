import { getObstacleEvents } from './computer-vision';

// TYPES ===========================
interface AutonomousCar {
    isRunning?: boolean,
    respond: (events: Events) => void
}

interface AutonomousCarProps {
    isRunning?: boolean
}

interface Events {
    [direction: string]: boolean
}

interface Control {
    execute: (commonand: string) => void
}

interface Steering extends Control {
    turn: (direction: string) => void
}

// CLASSES =========================
class Car implements AutonomousCar {
    isRunning;

    constructor(props: AutonomousCarProps){
        this.isRunning = props.isRunning;
    }

    respond(events: Events){
        !this.isRunning ? console.log("The car is off") : undefined;
    }
}

class SteeringControl implements Steering {
    execute(command: string){
        console.log(`Executing: ${command}`)
    }

    turn(direction: string){
        this.execute(`turn ${direction}`)
    }
}

// EXECUTION =======================
const autonomousCar = new Car({isRunning: true});

autonomousCar.respond(getObstacleEvents());