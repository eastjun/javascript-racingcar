import { CAR_NAME, TRY_COUNT } from "./race.js";

export const INPUT = Object.freeze({
  CAR_NAMES: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n`,
  TRY_COUNT: `시도할 횟수는 몇 회인가요?\n`,
});

export const OUTPUT = Object.freeze({
  RESULT: `\n실행 결과`,
  FINAL_WINNER: "최종 우승자:",
});

export const ERROR_PREFIX = "[ERROR]";

export const ERROR = Object.freeze({
  CAR_NAME: {
    EMPTY: `${ERROR_PREFIX} 자동차 이름이 비어있습니다.\n`,
    EXCEEDS_MAX_LENGTH: `${ERROR_PREFIX} 자동차 이름은 ${CAR_NAME.MAX_LENGTH}글자 이내로 작성주세요.\n`,
    DUPLICATE: `${ERROR_PREFIX} 자동차 이름에 중복이 존재합니다.\n`,
  },
  TRY_COUNT: {
    EMPTY: `${ERROR_PREFIX} 시도할 횟수가 비어있습니다.\n`,
    BELOW_MIN: `${ERROR_PREFIX} ${TRY_COUNT.MIN_NUM} 이상의 숫자를 입력해주세요.\n`,
    NOT_NUMBER: `${ERROR_PREFIX} 숫자를 입력해주세요.\n`,
  },
});
