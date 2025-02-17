import CarValidator from "../src/domains/validators/CarValidator.js";

describe("자동차 이름 유효성 테스트", () => {
  test.each([["다서엇글자"], ["일"]])(
    "자동차 이름은 5자 이하이어야 한다.",
    (carName) => {
      expect(() => {
        CarValidator.validateCarNameLength(carName);
      }).not.toThrow();
    }
  );

  test.each([
    ["자동차 이름이 6자 이상인 경우 에러가 발생한다.", "여서엇글자임"],
    ["자동차 이름이 0자인 경우 에러가 발생한다.", ""],
  ])("%s", (_, carName) => {
    expect(() => {
      CarValidator.validateCarNameLength(carName);
    }).toThrow();
  });
});

test.each([
  [["pobi", "pobi"]],
  [["pobi", "pobi", "pobi", "pobi"]],
  [["pobi", "woni", "pobi"]],
])("중복된 자동차 이름인 경우 에러가 발생한다.", (carNames) => {
  console.log(carNames);
  expect(() => {
    CarValidator.validateInputCarName(carNames);
  }).toThrow();
});
