const DEFAULT_ERROR_MESSAGE = '[ERROR]';
export const ERROR_MESSAGES = {
  carName: `${DEFAULT_ERROR_MESSAGE} 1글자 이상 5글자 이하의 자동차를 입력해주세요.`,
  countNotANumber: `${DEFAULT_ERROR_MESSAGE} 숫자를 입력해주세요.`,
  countNotPositive: `${DEFAULT_ERROR_MESSAGE} 양의 정수를 입력해주세요.`,
};

export const INPUT_MESSAGES = {
  carName: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  count: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  result: '실행 결과',
  winner: '최종 우승자: ',
};
