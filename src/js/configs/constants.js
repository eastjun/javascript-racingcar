export const INIT_DATA = {
  isRacing: false,
  carList: [],
  winners: [],
};

export const NUMBER_OF_CARS_RANGE = {
  MIN: 1,
  MAX: 5,
};

export const RACING_COUNT_RANGE = {
  MIN: 0,
  MAX: 10,
};

export const CAR_NAME_LENGTH_RANGE = {
  MIN: 1,
  MAX: 5,
};

export const CAR = {
  MOVE_FORWARD_THRESHOLD: 4,
  STEP: 1,
  INIT_DISTANCE: 0,
  RANDOM_NUMBER_RANGE: {
    MIN: 1,
    MAX: 9,
  },
};

export const RACE_INTERVAL = 1000;
export const CONGRATURATION_INTERVAL = 2000;

export const ERROR_MESSAGE = {
  CAR_NAME_SHOULD_COME_FIRST:
    '자동차가 등록되지 않았습니다. 자동차 이름을 먼저 입력해주세요.',
  DUPLICATED_CAR_NAME:
    '중복되는 자동차 이름이 있습니다. 서로 다른 자동차 이름을 입력해주세요.',
  OUT_OF_RACING_COUNT_RANGE: `입력한 레이싱 횟수가 ${RACING_COUNT_RANGE.MIN}보다 작거나 ${RACING_COUNT_RANGE.MAX}보다 큽니다. ${RACING_COUNT_RANGE.MIN}에서 ${RACING_COUNT_RANGE.MAX}사이의 숫자를 입력해주세요.`,
  OUT_OF_NUMBER_OF_CARS_RANGE: `너무 많은 자동차 이름을 입력했습니다. ${NUMBER_OF_CARS_RANGE.MIN}개 이상 ${NUMBER_OF_CARS_RANGE.MAX}개 이하의 자동차 이름들을 입력해주세요.`,
  OUT_OF_CAR_NAME_LENGTH_RANGE: `자동차 이름이 너무 길거나 짧습니다. ${CAR_NAME_LENGTH_RANGE.MIN}자 이상 ${CAR_NAME_LENGTH_RANGE.MAX}자 이하의 자동차 이름을 입력해주세요.`,
};

export const DELIMETER = ',';
