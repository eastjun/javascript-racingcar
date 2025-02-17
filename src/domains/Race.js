import Car from "./Car.js";

export default class Race {
  createCars(names) {
    return names.map(Car.of);
  }

  race(cars, MoveCondition) {
    cars.forEach((car) => {
      const isCanMove = MoveCondition.isCanMove();
      car.move(isCanMove);
    });
  }

  getWinner(cars) {
    const positions = cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);
    const winnerCars = cars.filter((car) => car.position === maxPosition);
    const winnerNames = winnerCars.map((car) => car.name);
    return winnerNames;
  }
}
