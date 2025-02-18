import OutputView from "../view/OutputView.js";

export default class Winner {
  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === max);
    OutputView.printWinner(winners);
    return winners;
  }
}
