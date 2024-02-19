import Cars from "../src/domain/Cars";

describe("자동차 이름 유효성 검사", () => {
  test("자동차 이름이 중복으로 입력 될 때 에러가 나는 지 확인.", () => {
    const carList = ["a", "b", "c", "c"];

    expect(() => {
      new Cars(carList);
    }).toThrow();
  });

  test("자동차 이름 길이가 6글자가 일 때 에러가 나는 지 확인.", () => {
    const carList = ["a", "b", "c", "c12345"];

    expect(() => {
      new Cars(carList);
    }).toThrow();
  });

  test("자동차 이름이 공백 일 때 에러가 나는 지 확인.", () => {
    const carList = ["a", "b", "c", ""];

    expect(() => {
      new Cars(carList);
    }).toThrow();
  });

  test("자동차 이름이 5글자가 입력되었을 때 에러가 발생하지 않는 지 확인.", () => {
    const carList = ["a", "b", "c", "d1234"];

    expect(() => {
      new Cars(carList);
    }).toBeTruthy();
  });

  test("자동차 입력 시 자동차 리스트에 콤마(,)를 기준으로 담기는지 확인.", () => {
    const carList = ["a", "b", "c", "d"];
    const cars = new Cars(carList);
    expect(cars.getCarList()).toEqual(["a", "b", "c", "d"]);
  });
});
