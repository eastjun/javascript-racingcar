import { RANDOM_NUMBER } from "../../constants.js";

export const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * (RANDOM_NUMBER.MAX_RANDOM_VALUE - RANDOM_NUMBER.MIN_RANDOM_VALUE + 1)) + RANDOM_NUMBER.MIN_RANDOM_VALUE
  );
};
