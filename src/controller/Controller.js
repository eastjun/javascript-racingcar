import Cars from '../model/Cars.js';
import TryCount from '../model/TryCount.js';
import catchReturn from '../utils/catchReturn.js';
import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';
import { getRandomNumbers } from '../utils/getRandomNumber.js';
import { NUMBER_RANGE } from '../constants/numberRange.js';

class Controller {
  #cars;
  #tryCount;
  #inputView = new InputView();
  #outputView = new OutputView();

  async start() {
    await this.#input();
    this.#allRound();
    this.#printWinner();
  }

  async #input() {
    this.#cars = await catchReturn(this.#getCars.bind(this));

    this.#tryCount = await catchReturn(this.#getTryCount.bind(this));
  }

  async #getCars() {
    const names = await this.#inputView.readCarNames();
    return new Cars(names);
  }

  async #getTryCount() {
    const count = await this.#inputView.readTryCount();
    return new TryCount(count);
  }

  #allRound() {
    this.#outputView.printResultTitle();
    for (let i = 0; i < this.#tryCount.getTryCount(); i++) this.#oneRound();
  }

  #oneRound() {
    const randomNumbers = getRandomNumbers(NUMBER_RANGE.min, NUMBER_RANGE.max);

    const playResult = this.#cars.play(randomNumbers);
    this.#outputView.printRacingResult(playResult);
  }

  #printWinner() {
    const winners = this.#cars.winners();
    this.#outputView.printWinners(winners);
  }
}

export default Controller;
