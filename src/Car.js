import { generateRandomInRange } from './util.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.step = 0;
        this.MIN_ACCEL = 0;
        this.MAX_ACCEL = 9;
        this.FORWARD_ACCEL = 4;
    }

    pressAccel() {
        return generateRandomInRange(this.MIN_ACCEL, this.MAX_ACCEL);
    }

    isCanForward() {
        return this.pressAccel() >= this.FORWARD_ACCEL;
    }

    tryForward() {
        if (this.isCanForward()) {
            this.forward();
        }
    }

    forward() {
        this.step += 1;
    }

    getSteps() {
        return this.step;
    }

    resetStep() {
        this.step = 0;
    }
}
