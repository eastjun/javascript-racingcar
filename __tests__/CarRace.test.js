import CarRace from "../src/domains/CarRace";
import mockRandoms from "../src/test-utils/mockRandoms";
import Random from "../src/utils/random";

describe("자동차 경주 도메인 테스트", () => {
  let carRace;

  beforeEach(() => {
    carRace = new CarRace("harry,bong,pobi");
  });

  it("각 라운드의 결과를 올바르게 표시한다.", () => {
    // given
    mockRandoms([1, 4, 9]);
    const expectedResult = {
      harry: 0,
      bong: 1,
      pobi: 1,
    };

    // when
    const roundResult = carRace.makeRoundResult();

    // then
    expect(roundResult).toEqual(expectedResult);
  });

  it("우승자를 올바르게 판단한다.", () => {
    // given
    mockRandoms([1, 4, 9, 7, 1, 3, 2, 8, 5]);
    const TRY_COUNT = 3;
    const expectedWinner = ["bong", "pobi"];

    // when
    Array.from({ length: TRY_COUNT }, () => {
      carRace.makeRoundResult();
    });
    const winners = carRace.judgeWinners();

    // then
    expect(winners).toEqual(expectedWinner);
  });
});
