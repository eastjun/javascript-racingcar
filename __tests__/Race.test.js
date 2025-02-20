import { Race } from '../src/domain/Race.js';
import Car from '../src/domain/Car.js';
import { MOVE_CONDITION } from '../src/constants/Constants.js';



describe('조건에 따른 자동차 이동 테스트', () => { 
  let suiCar = new Car("sui")

  beforeEach(()=>{
    suiCar = new Car("sui")
  }) 
  
  test(`randomNumber가 ${MOVE_CONDITION}  이상이면 자동차가 움직여야 한다.`, () => {
    Race.moveCar(MOVE_CONDITION, suiCar)

    expect(suiCar.position).toBe(1);
  });

  test(`randomNumber가 ${MOVE_CONDITION} 미만이면 자동차가 움직이지 않아야 한다.`, () => {
    Race.moveCar(MOVE_CONDITION-1, suiCar)

    expect(suiCar.position).toBe(0);
  });
});



describe('우승자 판별 테스트', () => {
  test('공동 우승자', () => {
    const carList = [
      { name: "수이", position: 2 },
      { name: "메타", position: 2 },
    ];

    const winners = Race.getWinnerName(carList)

    expect(winners).toEqual(['수이', '메타'])
  });

  test('단일 우승자', () => {    
    const carList = [
      { name: "수이", position: 2 },
      { name: "메타", position: 1 },
    ];
    const winners = Race.getWinnerName(carList)
   
    expect(winners).toEqual(['수이'])
  });
  })



