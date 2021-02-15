const MIN_NUMBER = 0;
const MAX_NUMBER = 9;

export const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
};
