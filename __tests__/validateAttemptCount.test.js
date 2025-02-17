import validateAttemptCount from "../src/validation/validateAttemptCount.js";

describe("validateAttemptCount() 유효성 검사", () => {
  describe("입력 값이 빈 경우", () => {
    test("빈 값을 입력할 경우 에러 발생", () => {
      expect(() => validateAttemptCount(null)).toThrow("[ERROR] 입력이 비어 있습니다.");
    });
  });

  describe("입력 값이 정수가 아닌 경우", () => {
    test.each([-1.3, 342.3])("소수를 입력하면 에러 발생 - 입력: %j", (input) => {
      expect(() => validateAttemptCount(input)).toThrow("[ERROR] 정수를 입력해주세요.");
    });

    test.each(["도레미도레미도", "마이턴"])("문자를 입력하면 에러 발생 - 입력: %j", (input) => {
      expect(() => validateAttemptCount(input)).toThrow("[ERROR] 정수를 입력해주세요.");
    });
  });

  describe("입력 값이 0 이하인 경우", () => {
    test.each([-3, -5, 0])("0 이하의 값을 입력하면 에러 발생 - 입력: %j", (input) => {
      expect(() => validateAttemptCount(input)).toThrow("[ERROR] 0보다 큰 수를 입력해주세요.");
    });
  });
});
