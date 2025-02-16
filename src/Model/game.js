const racingGame = {
  determineWinners(cars) {
    const winnerPosition = Math.max(...cars.map((car) => car.getPosition()));
    return cars
      .filter((car) => car.getPosition() === winnerPosition)
      .map((car) => car.getName());
  },
};

export default racingGame;
