import { checkTryCountRange } from '../src/validation/tryCountValidates';

describe('경주 시도 횟수 입력 검증 테스트', () => {
  test.each([1, 20, 5])('시도 횟수는 1~20 사이여야 한다.', (tryCount) => {
    expect(() => {
      checkTryCountRange(tryCount);
    }).not.toThrow('[ERROR]');
  });
});
