import Car from "../src/domains/Car.js";
import Race from "../src/domains/Race.js";
import { MOVE_THRESHOLD } from "../src/constants/constants.js";

describe("Race 클래스 테스트", () => {
  test("경주가 진행되면 시도 횟수만큼 결과가 생성된다.", () => {
    // given
    const cars = [new Car("Niya"), new Car("Hoyy")];
    const tryCount = 5;
    const race = new Race(cars);

    // when
    const raceResults = race.playRace(tryCount);

    // then
    expect(raceResults.length).toBe(tryCount);
  });

  test("경주가 끝나면 최소 한 명 이상의 우승자가 존재한다.", () => {
    // given
    const cars = [new Car("Niya"), new Car("Hoyy")];
    const tryCount = 5;
    const race = new Race(cars);

    // when
    race.playRace(tryCount);
    const winners = race.getWinners();

    // then
    expect(winners.length).toBeGreaterThan(0);
  });

  test.each([
    {
      description:
        "자동차 경주 종료 후, 최종 이동 거리에 따라 우승자를 반환한다. (1명만 우승하는 경우)",
      carsInfo: [
        { name: "Niya", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, MOVE_THRESHOLD] },
        { name: "Hoyy", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, MOVE_THRESHOLD - 1] },
      ],
      expectedWinners: ["Niya"],
    },
    {
      description:
        "자동차 경주 종료 후, 최종 이동 거리에 따라 우승자를 반환한다. (공동으로 우승하는 경우)",
      carsInfo: [
        { name: "Niya", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD] },
        { name: "Hoyy", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD] },
      ],
      expectedWinners: ["Niya", "Hoyy"],
    },
  ])("$description", ({ carsInfo, expectedWinners }) => {
    // given
    const cars = carsInfo.map(({ name, moves }) => {
      const car = new Car(name);
      moves.forEach((move) => car.move(move));
      return car;
    });
    const race = new Race(cars);

    // when
    const winners = race.getWinners();

    // then
    expect(winners).toEqual(expectedWinners);
  });
});
