const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME, INPUT, OUTPUT, OUTPUT_RESULT, OUTPUT_WINNER } = require('../constant/constants');
const { validateCarNames, validateWinningDistance } = require('../validation/input.js');
const common = require('../utils/common');

class RacingGameController {
  #service;
  #winningDistance;

  constructor(service) {
    this.#service = service;
  }

  async playGame() {
    OutputView.print(OUTPUT.startGame);
    await this.setCars();
    await this.setWinningDistance();
    this.setCars();
    this.setWinningDistance();
    this.startRacing();
  }

  async setCars() {
    const input = await InputView.readline(INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!validateCarNames(carNames)) return this.setCars();
    this.#service.makeCars(carNames);
  }

  async setWinningDistance() {
    this.#winningDistance = common.toInt(await InputView.readline(INPUT.winningDistance));
    if (!validateWinningDistance(this.#winningDistance)) return this.setWinningDistance();
  }

  startRacing() {
    this.#service.moveCars();
    this.isFinishGame(this.#service.getCars());
  }

  isFinishGame(cars) {
    if (!cars.some((car) => this.pickOutWinner(car))) {
      this.startRacing();
      return;
    }
    this.#showResult();
  }

  pickOutWinner(car) {
    return car.getDistance() >= this.#winningDistance;
  }

  #showResult() {
    OutputView.print(OUTPUT.resultMent);
    this.#service.recordCarsMove().forEach((history) => {
      history.forEach((car) => {
        OutputView.print(OUTPUT_RESULT(car));
      });
      OutputView.print(GAME.newLine);
    });
    this.showWinners();
  }

  showWinners() {
    const winners = this.#service.getCars().filter((car) => this.pickOutWinner(car));
    OutputView.print(OUTPUT_WINNER(winners));
  }
}
module.exports = RacingGameController;
