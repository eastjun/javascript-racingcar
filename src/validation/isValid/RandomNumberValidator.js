export const RandomNumberValidator={
  isInteger(value) {
    return Number.isInteger(value.min) && Number.isInteger(value.max);
  },

  isMaxGreaterThanMin(value) {
    return value.min < value.max;
  }
}

