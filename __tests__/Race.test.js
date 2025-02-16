import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Race from "../src/domain/Race.js";

test("공동 우승자 출력", () => {
  const race = new Race(["수이", "메타", "메이토"], 2);

  // Given: 자동차들의 위치 설정
  Object.defineProperty(race.carList[0], "position", { get: () => 2 });
  Object.defineProperty(race.carList[1], "position", { get: () => 2 });
  Object.defineProperty(race.carList[2], "position", { get: () => 0 });

  // When: 우승자 확인
  const winners = race.getWinnerName();

  // Then: 수이와 메타가 공동 우승자로 출력되어야 함
  expect(winners).toEqual(["수이", "메타"]);
});
