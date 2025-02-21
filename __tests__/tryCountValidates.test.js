import { checkIsInteger, checkTryCountRange } from '../src/validation/tryCountValidates';

describe('경주 시도 횟수 입력 검증 테스트', () => {
  test.each([1, 20, 5])('시도 횟수는 1~20 사이여야 한다.', (tryCount) => {
    expect(() => {
      checkTryCountRange(tryCount);
    }).not.toThrow('[ERROR]');
  });

  test.each([0, 21])('시도 횟수는 1~20 사이가 아닌 경우 에러가 발생한다.', (tryCount) => {
    expect(() => {
      checkTryCountRange(tryCount);
    }).toThrow('[ERROR]');
  });

  test('시도 횟수는 자연수로 입력해야 한다.', () => {
    const tryCount = 3;
    expect(() => {
      checkIsInteger(tryCount);
    }).not.toThrow('[ERROR]');
  });
  test('시도 횟수를 자연수로 입력하지 않으면 에러가 발생한다.', () => {
    const tryCount = 1.2;
    expect(() => {
      checkIsInteger(tryCount);
    }).toThrow('[ERROR]');
  });
});
