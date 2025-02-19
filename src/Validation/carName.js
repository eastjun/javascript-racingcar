const MAX_NAME_LENGTH = 5;

export const validateCarNameNoSpaces = (input) => {
  const carNames = input.split(',').map((name) => name.trim());

  const space = carNames.some((name) => name.includes(' '));

  if (space) {
    throw new Error('[Error] 자동차 이름에는 공백이 포함될 수 없습니다.');
  }
};

export const validateCarsNameLength = (input) => {
  if (input.split(',').some((carName) => carName.length > MAX_NAME_LENGTH)) {
    throw new Error(
      `[Error] 자동차 이름은 ${MAX_NAME_LENGTH}자 초과 안됩니다.`,
    );
  }
};

export const validateCarNameForm = (input) => {
  const trimmedInput = input.trim();
  const carNames = trimmedInput.split(',').filter(Boolean);
  const commaCount = (trimmedInput.match(/,/g) || []).length;

  if (!trimmedInput || commaCount !== carNames.length - 1) {
    throw new Error('[Error] 자동차 이름이 올바르지 않습니다.');
  }
};

export const validateDuplicatedCarName = (input) => {
  const target = Array.from(new Set(input.split(',')));
  const origin = input.split(',');
  if (target.length !== origin.length) {
    throw new Error('[Error] 중복된 자동차 이름은 안됩니다.');
  }
};
