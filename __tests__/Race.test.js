import { Race } from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';
import { MOVE_CONDITION } from '../src/constants/Constants.js';

let sui;
let meta;

beforeEach(() => {
  sui = new Car("수이");
  meta = new Car("메타");
})

describe('조건에 따른 자동차 이동 테스트', () => {  
  test(`randomNumber가 ${MOVE_CONDITION}  이상이면 자동차가 움직여야 한다.`, () => {
    Race.moveCar(MOVE_CONDITION, sui)

    expect(sui.position).toBe(1);
  });

  test(`randomNumber가 ${MOVE_CONDITION} 미만이면 자동차가 움직이지 않아야 한다.`, () => {
    Race.moveCar(MOVE_CONDITION-1,sui)

    expect(sui.position).toBe(0);
  });
});



describe('조건에 따른 자동차 이동 테스트', () => {
  test('공동 우승자', () => {
    const carList = [sui, meta]
    Race.moveCar(MOVE_CONDITION, sui)
    Race.moveCar(MOVE_CONDITION, meta)
    const winners = Race.getWinnerName(carList)

    expect(winners).toEqual(['수이', '메타'])
  });

  test('단일 우승자', () => {
    const carList = [sui, meta]
    Race.moveCar(MOVE_CONDITION, sui)
    const winners = Race.getWinnerName(carList)

    expect(winners).toEqual(['수이'])
  });
  })



