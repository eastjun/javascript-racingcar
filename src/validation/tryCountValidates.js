import { MAX_TRY_COUNT, MIN_TRY_COUNT } from '../constants/MAGIC_NUMBER';

export function checkTryCountRange(tryCount) {
  if (tryCount < MIN_TRY_COUNT || tryCount > MAX_TRY_COUNT)
    throw new Error(`[ERROR] 시도 횟수는 ${MIN_TRY_COUNT} ~ ${MAX_TRY_COUNT} 사이여야 합니다.`);
}

export function checkIsInteger(tryCount) {
  if (!Number.isInteger(tryCount)) throw new Error('[ERROR] 시도 횟수는 자연수로 입력되어야 합니다.');
}

export function checkTryCount(tryCountInput) {
  const tryCount = Number(tryCountInput);
  checkTryCountRange(tryCount);
  checkIsInteger(tryCount);
  return tryCount;
}
