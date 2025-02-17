const MOVE_THRESHOLD = 4;

const MAX_CAR_LENGTH = 5;

const DELIMITER = ',';

const ERROR_MESSAGE = {
  belowLimit: `자동차 이름은 ${MAX_CAR_LENGTH}글자 이하만 가능합니다`,
  positiveLength: '자동차 이름을 입력해야 합니다',
  positiveNumber: '시도 횟수는 양수여야 합니다',
  numeric: '시도 횟수는 숫자여야 합니다',
  integer: '시도 횟수는 정수어야 합니다',
  duplicateNames: '중복된 이름은 작성하실 수 없습니다.',
  endWithDelimiter: '문장의 마지막은 구분자로 끝낼 수 없습니다',

};

const INPUT_MESSAGE = {
  raceCarNames:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
  raceCount: '시도할 횟수는 몇 회인가요?',
};

const OUTPUT_MESSAGE = {
  result: '실행 결과',

};

export {
  MOVE_THRESHOLD,
  MAX_CAR_LENGTH,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  DELIMITER,

};
