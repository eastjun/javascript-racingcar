/* eslint-disable */

import Car from '../src/domain/Car';
import Round from '../src/domain/Round';

let CAR1, CAR2, CAR3;

beforeEach(() => {
  const carNames = ['car1', 'car2', 'car3'];
  [CAR1, CAR2, CAR3] = carNames.map((carName) => new Car(carName));
});

test('가장 많이 움직인 자동차를 반환할 수 있는지 확인', () => {
  CAR1.moveOneStep();
  CAR1.moveOneStep();
  CAR2.moveOneStep();

  const round = new Round([CAR1, CAR2, CAR3]);
  const mostMovedCar = round.getMostMovedCar();

  expect(mostMovedCar.length).toBe(1);
  expect(mostMovedCar[0].raceCarName).toBe('car1');
  expect(mostMovedCar[0].position).toBe(2);
});

test('자동차 경기 결과를 기대값과 동일하게 반환할 수 있는지 확인', () => {
  Array.from({ length: 3 }, () => CAR1.moveOneStep());
  Array.from({ length: 2 }, () => CAR2.moveOneStep());
  Array.from({ length: 1 }, () => CAR3.moveOneStep());

  const round = new Round([CAR1, CAR2, CAR3]);

  const EXPECTED_RESULT = [
    { raceCarName: 'car1', racePosition: 3 },
    { raceCarName: 'car2', racePosition: 2 },
    { raceCarName: 'car3', racePosition: 1 },
  ];

  expect(round.getRoundResult()).toEqual(EXPECTED_RESULT);
});
