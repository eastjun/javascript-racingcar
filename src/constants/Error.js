import DEFINITION from './Definition.js';

const ERROR = {
  MESSAGE: {
    INPUT_NAME: {
      IS_ARRAY_LENGTH_OVER: '[ERROR] 자동차는 최대 40명까지만 경주할 수 있습니다.',
      IS_DUPLICATED: '[ERROR] 자동차 이름에 중복이 있습니다.',
      IS_EMPTY: '[ERROR] 입력한 이름에 빈 값이 포함되어있습니다.',
      IS_STRING_LENGTH_OVER: '[ERROR] 이름은 5글자를 초과할 수 없습니다.',
      IS_ARRAY_LENGTH_RANGE_OVER: '[ERROR] 경주는 최소 2명, 최대 40명까지만 참여할 수 있습니다.',
    },
    INPUT_TRY_NUMBER: {
      IS_RANGE_OVER: `[ERROR] ${DEFINITION.MIN_GAME}보다 크고 ${DEFINITION.MAX_GAME}보다 작은 값을 입력해주세요.`,
      IS_DECIMAL: `[ERROR] 시도 횟수는 정수를 입력해주세요.`,
      IS_NOT_NUMBER: `[ERROR] 숫자를 입력해주세요.`,
    },
    INVALID_CAR_NAME: '[ERROR] 차 생성 중 예기치 못한 오류가 발생하였습니다.',
  },
};

export default ERROR;
