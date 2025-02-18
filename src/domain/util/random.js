import { MAX_RANDOM_VALUE, MIN_RANDOM_VALUE } from "../../constants.js";

export const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1)) + MIN_RANDOM_VALUE
  );
};
