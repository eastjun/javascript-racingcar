const Random = require("../utils/Random");
const { MOVE_FORWARD, FLAG, NOT_MOVED } = require("../utils/constants");

class Race {
  #carNames;
  #numberOfTrial;
  #currentRace = [];
  constructor(carNames, numberOfTrial) {
    this.#carNames = carNames;
    this.#numberOfTrial = numberOfTrial;
  }

  start() {
    while (true) {
      const race = this.convertResults(
        Random.makeRandomNumbers(this.#numberOfTrial)
      );
      this.#currentRace.push(race);
      if (this.#carNames.length === this.#currentRace.length) break;
    }
    return this.#currentRace;
  }

  convertResults(race) {
    const convertedRace = race.map((step) => {
      return step >= FLAG ? MOVE_FORWARD : NOT_MOVED;
    });
    return convertedRace;
  }

  makeResult() {
    const distanceArray = this.#currentRace.map((race) => {
      return race.filter((el) => el === MOVE_FORWARD).length;
    });
    const maxDistance = Math.max(...distanceArray);
    const winner = distanceArray.reduce((arr, distance, index) => {
      if (distance === maxDistance) arr.push(this.#carNames[index]);
      return arr;
    }, []);
    return winner;
  }
}

module.exports = Race;
