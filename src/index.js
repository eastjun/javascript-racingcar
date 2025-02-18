import Car from './domain/Car.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Race from './domain/Race.js';
import Winner from './domain/Winner.js';
import Validator from './validator.js';

export async function run() {
  let nameList;
  let count;

  while (!nameList) {
    try {
      const rawNameList = await InputView.getInput(
        '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      );
      Validator.validateCarName(rawNameList);
      nameList = rawNameList.split(',').map(name => name.trim());
    } catch (error) {
      console.log(error.message);
    }
  }

  while (!count) {
    try {
      const rawCount = await InputView.getInput('시도할 횟수는 몇 회인가요?\n');
      Validator.validateCount(rawCount);
      count = Number(rawCount);
    } catch (error) {
      console.log(error.message);
    }
  }

  const cars = nameList.map(name => new Car(name));

  OutputView.printGameStart();
  const race = new Race(cars);
  const roundResultList = race.playAllRounds(count);

  OutputView.printAllGame(roundResultList, nameList);

  const winnerOutput = Winner.findWinners(cars);

  OutputView.printWinners(winnerOutput);
}

await run();
