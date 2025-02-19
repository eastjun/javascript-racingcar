import { SYSTEM_MESSAGE } from "../src/constants/SystemMessage.js";
import Cars from "../src/domain/Cars.js";

describe("자동차 리스트 클래스 테스트", () => {
  describe("자동차 리스트 클래스 정상 케이스", () => {
    const names = ["목성이", "화성이", "금성이"];
    let cars;

    beforeEach(() => {
      cars = new Cars(names);
    });

    test("우승자가 한 명일 수 있다.", () => {
      const carList = cars.getCars();

      carList[0].position += 2;
      carList[1].position += 1;
      carList[2].position += 5;

      const winners = cars.getWinners();
      expect(winners).toEqual(["금성이"]);
      expect(winners.length).toBe(1);
    });

    test("우승자가 한 명 이상일 수 있다.", () => {
      const carList = cars.getCars();

      carList[0].position += 2;
      carList[1].position += 5;
      carList[2].position += 5;
      const winners = cars.getWinners();
      expect(winners).toEqual(["화성이", "금성이"]);
      expect(winners.length).toBe(2);
    });
  });
});
