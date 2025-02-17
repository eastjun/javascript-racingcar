import TryNumberValidator from "../src/domains/validators/TryNumberValidator";

test.each([[1], [100]])(
  "시도횟수는 1회 이상 100회 이하이어야 한다.",
  (tryNumber) => {
    expect(() => {
      TryNumberValidator.validateInputTryNumber(tryNumber);
    }).not.toThrow();
  }
);

test.each([[0], [101]])(
  "시도횟수가 0회 이하 101회 이상인 경우 에러가 발생한다.",
  (tryNumber) => {
    expect(() => {
      TryNumberValidator.validateInputTryNumber(tryNumber);
    }).toThrow();
  }
);
