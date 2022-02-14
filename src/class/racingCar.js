import Car from "./car.js";
import generateRandomNumber from "../modules/generateRandomNumber.js";
import { FORWARD_MARK_NUMBER } from "../constants/constants.js";
export default class RacingCar {
    constructor() {
        this.raceCount = 0;
        this.carArray = [];
    }
    
    generateCars(carNameArray) {
        carNameArray.forEach(carName => {
            this.carArray.push(new Car(carName));
        });
    }
    
    playGame(carNameArray,raceCount){
        this.raceCount = raceCount;        
        this.generateCars(carNameArray);
        for(let i=0; i < this.raceCount; i++){
            this.updateCarForwardCount();
        }
        return this.carArray;
    }

    updateCarForwardCount() {
        this.carArray.forEach((item) => {
            if(generateRandomNumber() >= FORWARD_MARK_NUMBER){
                item.forwardCount++;
            }
        })
    }

    getGameWinners(){
        const maxCount = this.carArray
        .map(car => car.forwardCount)
        .sort((a,b) => b - a)[0];
        return this.carArray
        .filter((item) => item.forwardCount === maxCount)
        .map(item => item.name).join(',');
    }
    
}