import { CAR_CAN_GO_COUNT } from '../util/constants.js';
import generateCars from '../model/generateCars.js';
import showResult from '../view/showResult.js';
import getWinners from '../model/getWinners.js';
import showWinners from '../view/showWinners.js';
import showRestart from '../view/showRestart.js';

function sortCars(cars) {
  const sortedCars = [...cars];
  return sortedCars.sort((a, b) => b.position - a.position);
}

function isCarCanGo() {
  if (Math.floor(Math.random() * 10) >= CAR_CAN_GO_COUNT) {
    return true;
  }
  return false;
}

export default function playRace(count) {
  const cars = generateCars();
  while (count) {
    cars.forEach(car => {
      if (isCarCanGo()) {
        car.go();
      }
    });
    count -= 1;
  }
  showResult(sortCars(cars));
  showWinners(getWinners(cars));
  showRestart();
}
