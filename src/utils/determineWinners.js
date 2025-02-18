const determineWinners = (cars) => {
  const carsPosition = cars.map((car) => car.position);
  const maxPosition = Math.max(...carsPosition);

  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
};

export default determineWinners;
