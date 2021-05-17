import { getObstacleEvents } from './computer-vision';

// TYPES ===========================
interface AutonomousCar {
    isRunning?: boolean
}

interface AutonomousCarProps {
    isRunning?: boolean
}

// CLASSES =========================
class Car implements AutonomousCar {
    isRunning;

    constructor(props: AutonomousCarProps){
        this.isRunning = props.isRunning;
    }
}

// EXECUTION =======================
const autonomousCar = new Car({isRunning: true});

console.log("Autonomous Car: ", autonomousCar)