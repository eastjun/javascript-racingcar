export const createCars = (carNames) => {
  return carNames.map((carName) => ({ name: carName.trim(), position: 0 }));
};
