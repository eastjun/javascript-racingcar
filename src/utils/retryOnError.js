const retryOnError = async (asyncFn, printError) => {
  while (true) {
    try {
      return await asyncFn();
    } catch (e) {
      printError(e.message);
    }
  }
};

export default retryOnError;
