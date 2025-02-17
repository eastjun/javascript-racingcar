export const RANDOM_NUMBER = {
  MAX: 9,
  MIN: 0,
};

export const MOVE_CONDITION = 4;

export const INPUT_MESSAGE = {
  CAR: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
};

export const OUTPUT_MESSAGE = {
  RESULT: "실행 결과\n",
  WINNER: "최종 우승자:",
};

export const NAME_DELIMITER = ",";

export const LINE_BREAK = "\n";

export const CAR_NAME_LENGTH = {
  MIN: 1,
  MAX: 5,
};

export const CAR_NAME_ERROR_MESSAGES = {
  EMPTY_CAR_NAME: "자동차 이름에 빈 값이 포함되어 있습니다.",
  NAME_LENGTH: `자동차 이름은 ${CAR_NAME_LENGTH.MAX}자 이상 ${CAR_NAME_LENGTH.MIN}자 이하여야합니다.`,
};

export const CAR_NAME_LIST_ERROR_MESSAGES = {
  EMPTY_INPUT: "입력이 비어 있습니다.",
  SINGLE_CAR_NAME: "두 대 이상의 자동차 이름을 입력해 주세요.",
  DUPLICATE_CAR_NAME: "자동차 이름이 중복되었습니다.",
};

export const ATTEMPT_NUMBER_MAX = 20;
export const ATTEMPT_ERROR_MESSAGES = {
  EMPTY_INPUT: "입력이 비어 있습니다.",
  NOT_INTEGER_INPUT: "정수를 입력해주세요.",
  MINUS_INPUT: "0보다 큰 수를 입력해주세요.",
  MAX_NUMBER: `최대 ${ATTEMPT_NUMBER_MAX}회까지 실행 가능합니다.`,
};
