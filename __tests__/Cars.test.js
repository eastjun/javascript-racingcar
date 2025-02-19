import Cars from "../src/domain/Cars.js";

describe("자동차 리스트 클래스 테스트", () => {
  describe("자동차 이름 유효성 클래스 테스트", () => {
    test("자동차 이름은 1이상 5이하이다.", () => {
      const carNames = ["일", "화성", "토성이", "목성목성", "금성금성금"];
      expect(() => new Cars(carNames).validateCarNames(carNames)).not.toThrow();
    });

    describe("자동차 이름 유효성 클래스 예외 케이스", () => {
      test("1글자 미만의 자동차 이름이 포함되어 있으면 에러가 발생한다.", () => {
        const carNames = ["", "화성", "토성이", "목성목성"];
        expect(() => new Cars(carNames).validateCarNames(carNames)).toThrow();
      });

      test("5글자를 초과하는 자동차 이름이 포함되어 있으면 에러가 발생한다.", () => {
        const carNames = ["화성", "토성이", "목성목성", "금성금성금성"];
        expect(() => new Cars(carNames).validateCarNames(carNames)).toThrow();
      });
    });
  });

  describe("자동차 리스트 클래스 정상 케이스", () => {
    const names = ["목성이", "화성이", "금성이"];
    let cars;

    beforeEach(() => {
      cars = new Cars(names);
    });

    test("자동차를 생성할 수 있다.", () => {
      const car = cars.getCars()[0];
      expect(car.name).toEqual("목성이");
    });

    test("자동차 리스트를 생성할 수 있다.", () => {
      const carList = cars.getCars();
      expect(carList).toHaveLength(3);
      const carNames = carList.map((car) => car.name);
      expect(carNames).toEqual(names);
    });

    test("자동차 경주를 한 라운드 실행하면, 전진 또는 멈춘다.", () => {
      cars.moveCars();
      cars.getCars().forEach((car) => {
        expect(car.position).toBeLessThan(2);
      });
    });

    test("자동차 경주를 한 라운드 실행하면, 최대 위치가 1이다.", () => {
      expect(cars.getMaxPosition()).toBeLessThan(2);
    });
  });
});
