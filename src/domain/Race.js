import { MOVE_CONDITION } from "../constants/Constants.js";

export const Race = {
    moveCar(randomNumber, car) {
      if (this.checkMoveCondition(randomNumber)) car.move();
    },

    checkMoveCondition(randomNumber){
      return randomNumber >= MOVE_CONDITION;
    },

    getWinnerName(carList) {
      const winnerCar = carList.filter((car) => car.position === Math.max(...carList.map((car) => car.position)));
      const winnerName = winnerCar.map((car) => car.name);
    return winnerName;
    }
  }