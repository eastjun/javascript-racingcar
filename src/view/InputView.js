import { readLineAsync, retryUntilSuccess } from '../utils.js';

export default class InputView {
  static async getInput(message) {
    return retryUntilSuccess(async () => {
      const rawDate = await readLineAsync(message);
      return rawDate;
    });
  }
}
