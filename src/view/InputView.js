import { readLineAsync } from '../utils.js';

export default class InputView {
  static async getInput(message) {
    const rawDate = await readLineAsync(message);
    return rawDate;
  }
}
