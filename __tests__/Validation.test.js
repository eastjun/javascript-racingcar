import { describe, test, expect } from "@jest/globals";

import { ERROR } from "../src/constants/messages.js";
import { validateCount } from "../src/validation/tryCountValidate.js";
import {
  hasDuplicateNames,
  hasEmptyString,
  isLengthLongerThanFive,
} from "../src/validation/validators.js";

describe("유효성 검사 테스트", () => {
  test("배열에 빈 문자열이 들어오면 false를 반환한다.", () => {
    const result = hasEmptyString([""]);
    expect(result).toBeTruthy();
  });

  test("빈 값이 들어오면 에러를 반환한다.", () => {
    expect(() => validateCount("").toThrow(ERROR.TRY_COUNT.EMPTY));
  });

  test("자동차 이름이 5글자가 넘을 경우 true를 반환한다.", () => {
    const carArr = isLengthLongerThanFive(["abcdef"]);
    expect(carArr).toBeTruthy();
  });

  test("숫자가 아닌 값이 들어오면 에러를 반환한다.", () => {
    expect(() => validateCount("123").toThrow(ERROR.TRY_COUNT.NOT_NUMBER));
  });

  test("자동차 이름이 중복될 경우 true를 반환한다.", () => {
    const hasDuplicatedName = hasDuplicateNames(["세라", "세라"]);
    expect(hasDuplicatedName).toBeTruthy();
  });
});
