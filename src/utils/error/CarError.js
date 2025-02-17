import CustomError from "./CustomError.js";

export default class CarError extends CustomError {
  constructor(message) {
    super(message);
  }
}
