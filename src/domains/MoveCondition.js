import { generateRandomNumber } from "../utils/utils.js";

export default class MoveCondition {
  static MOVE_CONDITION = 4;

  static isCanMove() {
    return generateRandomNumber() >= MoveCondition.MOVE_CONDITION;
  }
}
