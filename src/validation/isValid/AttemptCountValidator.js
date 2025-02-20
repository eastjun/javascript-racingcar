export const AttemptCountValidator={
  isInteger(attemptCount) {
    return Number.isInteger(attemptCount);
  },

  isPlus(attemptCount) {
    return attemptCount > 0;
  }
}

