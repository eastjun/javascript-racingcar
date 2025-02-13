const MIN_GAME_COUNT = 0;
const MAX_GAME_COUNT = 100;

export const validateGameCountType = (input) => {
  // TODO: '' 잡아내기
  const isInteger = Number.isInteger(Number(input));
  if (isInteger === false) {
    throw new Error("[Error] 시도 횟수는 소수,문자열,NaN,Infinity 안됩니다.");
  }
};

export const validateGameCountRange = (input) => {
  const gameCount = Number(input);
  if (gameCount <= MIN_GAME_COUNT || gameCount >= MAX_GAME_COUNT) {
    throw new Error("[Error] 시도 횟수는 0이하, 100이상 안됩니다.");
  }
};
