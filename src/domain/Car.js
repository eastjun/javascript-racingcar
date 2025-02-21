import { MOVE_CONDITION, MOVE_FORWARD } from "./constants.js";
class Car {
    name
    position
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move(randomNumber) {
        if (randomNumber >= MOVE_CONDITION) {
            this.position += MOVE_FORWARD;
        }
    }

}

export default Car;
