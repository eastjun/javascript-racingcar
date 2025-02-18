import validateCarNames from "../src/validation/validateCarNames.js";
import { CAR_NAME_BOUNDARY_LENGTH, ERROR_CAR_NAMES_MESSAGE } from "../src/constant/constant.js";

describe("CarNames 유효성 테스트", () => {
  const NAME_1 = "Niya";
  const NAME_2 = "Hoyy";
  const OVER_LENGTH_NAME = "HoyyChoi";

  test.each([
    { description: "자동차 이름이 존재하지 않는 경우", input: "", errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_EXIST },
    {
      description: "자동차 이름들 중, 공백이 존재하는 경우",
      input: `${NAME_1},,${NAME_2}`,
      errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_EXIST,
    },

    {
      description: `자동차 이름이 ${CAR_NAME_BOUNDARY_LENGTH}글자가 넘는 경우`,
      input: `${NAME_1},${OVER_LENGTH_NAME}`,
      errorMessage: ERROR_CAR_NAMES_MESSAGE.OVER,
    },
    {
      description: "자동차 이름이 중복되는 경우",
      input: `${NAME_1},${NAME_1}`,
      errorMessage: ERROR_CAR_NAMES_MESSAGE.DUPLICATE,
    },
  ])("$description 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateCarNames(input)).toThrow(errorMessage);
  });

  test("올바른 입력 값을 받는 경우 에러가 발생하지 않는다.", () => {
    // given
    const input = `${NAME_1},${NAME_2}`;

    // when & then
    expect(() => validateCarNames(input)).not.toThrow();
  });
});
