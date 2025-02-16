import Console from "./Console.js";

const retryValidCheck = async (readAndValidate) => {
  while (true) {
    try {
      return await readAndValidate();
    } catch (error) {
      Console.printErrorMessage(error);
    }
  }
};

export default retryValidCheck;
