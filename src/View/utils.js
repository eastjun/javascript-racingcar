import readline from 'readline';

export function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error('arguments must be 1'));
    }

    if (typeof query !== 'string') {
      reject(new Error('query must be string'));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

export const readUserInputUntilSuccess = async ({
  readUserInput,
  validation,
}) => {
  try {
    const input = await readUserInput();
    validation(input);

    return input;
  } catch (error) {
    console.error(error.message);
    return readUserInputUntilSuccess({ readUserInput, validation });
  }
};
