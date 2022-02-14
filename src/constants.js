const ID = {
  APP: 'app',
  INPUT_FORMS: 'input-forms',
  CAR_NAMES_FORM: 'car-names-form',
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_SUBMIT: 'car-names-submit',
  CAR_COUNTS_INPUT: 'racing-count-input',
  RACING_COUNT_FORM: 'racing-count-form',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_SUBMIT: 'racing-count-submit',
  RESTART_BUTTON: 'restart-button',
  RACING_WINNERS: 'racing-winners',
  RACING_STATUS: 'racing-status',
};

const MESSAGE = {
  REINPUT_NAME: '이름 재입력이 불가능합니다',
  WRONG_NAME_LENGTH: '1~5자의 자동차 이름을 입력해 주세요.',
  DUPLICATE_NAME: '중복된 자동차 이름은 입력이 불가능합니다.',
  REINPUT_COUNT: '레이싱 횟수 재입력이 불가능합니다.',
  NO_CAR: '자동차 이름이 입력되지 않았습니다.',
  WRONG_COUNT: '올바르지 않은 레이싱 횟수입니다',
};

export { ID, MESSAGE };
