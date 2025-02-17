import { CAR_NAME_CONDITION } from "../../constants/Constants.js";

export const CarNameValidator={
  isTooLong(carName){
    return carName.length >= CAR_NAME_CONDITION.LENGTH_MAX;
  },

  isTooShort(carName){
    return carName.trim().length <= CAR_NAME_CONDITION.LENGTH_MIN;
  }
}

