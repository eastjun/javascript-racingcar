import Round from './Round.js';
class Race {
  #raceCount;
  #round;
  #raceResult;

  constructor(names, raceCount) {
    this.#raceCount = raceCount;
    this.#round = new Round(names);
    this.#raceResult = [];
  }

  getWinner() {
    return this.#round.getMostMovedCar();
  }

  raceCar() {
    for (let i = 0; i < this.#raceCount; i++) {
      this.#round.playOneRound();
      this.#raceResult.push(this.#round.getRoundResult());
    }
  }

  getRaceResult() {
    return this.#raceResult;
  }
}

export default Race;
