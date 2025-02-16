const MIN_GAME_COUNT = 0;
const MAX_GAME_COUNT = 100;

export const validateGameCountType = (input) => {
  const trimmedInput = String(input).trim();
  const numberValue = Number(trimmedInput);

  const isEmpty = trimmedInput === '';
  const isNotInteger = !Number.isInteger(numberValue);

  if (isEmpty || isNotInteger) {
    throw new Error(
      '[Error] 시도 횟수는 공백, 소수, 문자열, NaN, Infinity가 될 수 없습니다',
    );
  }
};

export const validateGameCountRange = (input) => {
  const gameCount = Number(input);
  if (gameCount <= MIN_GAME_COUNT || gameCount >= MAX_GAME_COUNT) {
    throw new Error('[Error] 시도 횟수는 0이하, 100이상 안됩니다.');
  }
};
