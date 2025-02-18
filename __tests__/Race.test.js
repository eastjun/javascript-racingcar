import Race from "../src/domain/Race.js";
import { MOVE_CONDITION } from "../src/constants/Constants.js";

describe("Race 클래스 테스트", () => {
  test("자동차 리스트가 정상적으로 생성되는가", () => {
    const race = new Race(["Tesla", "BMW", "Audi"], 3);
    expect(race).not.toBeUndefined();
    expect(race.carList.length).toBe(3);
    expect(race.carList[0].name).toBe("Tesla");
  });

  test("executeRace() 실행 후 모든 시도 결과가 저장되는가", () => {
    const race = new Race(["Tesla"], 3);

    const raceResult = race.executeRace();

    expect(raceResult.length).toBe(3);
  });

  test("getWinnerName()이 우승자를 정상적으로 반환하는가", () => {
    const race = new Race(["Tesla", "BMW", "Audi"], 1);

    race.carList[0].move(MOVE_CONDITION);
    race.carList[2].move(MOVE_CONDITION + 2);

    const winners = race.getWinnerName();
    expect(winners).toEqual(expect.arrayContaining(["Tesla", "Audi"]));
    expect(winners).not.toContain("BMW");
  });
});
