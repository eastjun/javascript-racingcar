import CustomError from "./CustomError.js";

export default class AtteptError extends CustomError {
  constructor(message) {
    super(message);
  }
}
