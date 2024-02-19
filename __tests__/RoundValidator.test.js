import { ERROR_MESSAGE } from '../src/constant';
import { Round } from '../src/domain';

describe('진행횟수 관련 유효성 검사 테스트', () => {
  test('진행 횟수에 관한 입력값이 1~5 사이의 정수인 경우 오류 없음', () => {
    const inputArray = ['1', '2', '4', '5'];

    inputArray.forEach((input) => {
      expect(() => new Round(input)).not.toThrow();
    });
  });

  test('진행 횟수에 관한 입력값이 1~5 사이의 정수가 아닐 경우 오류 출력', () => {
    const inputArray = ['0', '1.5', 'a12', '6'];

    inputArray.forEach((input) => {
      expect(() => new Round(input)).toThrow(ERROR_MESSAGE.round);
    });
  });
});
