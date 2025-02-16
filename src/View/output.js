import { getRandomNumber } from '../util.js';

const outputView = {
  printGameResult(gameCount, cars) {
    console.log('\n실행 결과');
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber();
        car.move(randomNumber);
        console.log(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
      });
      console.log('');
    }
  },
  printWinners(winners) {
    console.log(`최종 우승자: ${winners.join(', ')}`);
  },
};

export default outputView;
