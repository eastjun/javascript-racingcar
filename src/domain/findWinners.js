function findWinners(cars) {
  const maxAdvanceCount = Math.max(...cars.map((cars) => cars.count));
  const winners = cars.filter((car) => car.count === maxAdvanceCount);

  const winnersName = [];

  for (let winner of winners) {
    winnersName.push(winner.name);
  }

  return winnersName;
}

export default findWinners;
