import { CAR_NAME_CONDITION } from "../../constants/Constants.js";

export const CarNameListValidator={
  isTooSmall(carNameList) {
    return carNameList.length <= CAR_NAME_CONDITION.COUNT_MIN;
  },

  isDuplicated(carNameList) {
    return new Set(carNameList).size !== carNameList.length;
  }
}
