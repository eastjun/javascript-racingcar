export const NUMBER = {
  MAX_LENGTH: 5,
  MIN_NUMBER: 1,
  INITIAL_STEP: 0,
  RANGE_START: 0,
  RANGE_END: 9,
  STEP_BASE_NUMBER: 4,
  STEP: 1,
};

export const ERROR = {
  EMPTY_INPUT: '1글자 이상의 자동차 이름을 입력해주세요.',
  LONG_LENGTH: `각 자동차의 이름을 ${NUMBER.MAX_LENGTH}자 이하로 입력해주세요.`,
  UNDER_MIN_NUMBER: `${NUMBER.MIN_NUMBER} 이상의 수를 입력해주세요.`,
  DECIMAL: '자연수를 입력해주세요.',
  DUPLICATE_NAME: '이름을 중복되지 않게 입력해주세요.',
};

export const SELECTOR = {
  NAME_INPUT: '.input-section__name-input',
  NAME_BUTTON: '.input-section__name-button',
  COUNT_INPUT: '.input-section__count-input',
  COUNT_BUTTON: '.input-section__count-button',
  COUNT_SUBMIT_CONTAINER: '#count-submit-container',
  STEP_SECTION: '.step-section',
  STEP_SECTIONS: '.step-sections',
  WINNER: '#winner',
  RESET_BUTTON: '#reset-button',
};

export const DISPLAY_NONE = 'display-none';
