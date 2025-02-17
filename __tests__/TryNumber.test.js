import TryNumberValidator from "../src/domains/validators/TryNumberValidator";
describe("시도 횟수 유효성 검사", () => {
  test.each([[1], [100]])(
    "시도횟수는 1회 이상 100회 이하이어야 한다.",
    (tryNumber) => {
      expect(() => {
        TryNumberValidator.validateInputTryNumber(tryNumber);
      }).not.toThrow();
    }
  );

  test.each([["a"], ["가가"], ["문자열"], [-1]])(
    "시도 횟수가 양의 정수가 아닌 경우 에러가 발생한다.",
    (tryNumber) => {
      expect(() => {
        TryNumberValidator.validateInputTryNumber(tryNumber);
      }).toThrow();
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
});
