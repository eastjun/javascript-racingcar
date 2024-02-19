import Console from '../utils/Console.js';
import Message from '../constant/Message.js';

const { INPUT } = Message;

const Input = {
  async carName() {
    const input = await Console.readLineAsync(INPUT.CAR_NAME);
    return input;
  },

  async tryCount() {
    const input = await Console.readLineAsync(INPUT.TRY_COUNT);
    return input;
  },
};

export default Input;
