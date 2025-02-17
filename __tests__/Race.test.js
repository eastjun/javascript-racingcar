import Race from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';
import { MOVE_CONDITION } from '../src/constants/Constants.js';

const sui = new Car("수이")
const meta = new Car("메타")
const race = new Race([sui, meta])

describe('조건에 따른 자동차 이동 테스트', () => {
  test('공동 우승자', () => {
    const winners = race.getWinnerName();

    expect(winners).toEqual(['수이', '메타']);
  });

  test('단일 우승자', () => {
    sui.move()

    const winners = race.getWinnerName();

    expect(winners).toEqual(['수이']);
  });
  })

describe('조건에 따른 자동차 이동 테스트', () => {  
  test(`randomNumber가 ${MOVE_CONDITION}  이상이면 자동차가 움직여야 한다.`, () => {
    race.moveCar(MOVE_CONDITION, meta);

    expect(meta.position).toBe(1);
  });

  test(`randomNumber가 ${MOVE_CONDITION} 미만이면 자동차가 움직이지 않아야 한다.`, () => {
    race.moveCar(MOVE_CONDITION - 1, sui);

    expect(sui.position).toBe(1);
  });
});


