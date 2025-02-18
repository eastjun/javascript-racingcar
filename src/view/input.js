import readline from "readline";

export const retryInput = async (callback) => {
  try {
    return await callback();
  } catch (error) {
    console.log(error.message);
    return retryInput(callback);
  }
};

export const readLineAsync = (query) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
};
