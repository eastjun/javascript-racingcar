import Race from '../../src/domain/Race';

describe('레이스 검증', () => {
  describe('라운드 카운트 생성 검증', () => {
    test('라운드 입력이 빌 경우 에러 발생', () => {
      // given
      const invalidInput = '';

      expect(() => {
        // when
        new Race(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 정수가 아닐 경우 에러 발생', () => {
      // given
      const invalidInput = '-3.5';

      expect(() => {
        // when
        new Race(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 1미만일 경우 에러 발생', () => {
      // given
      const invalidInput = '-3';

      expect(() => {
        // when
        new Race(invalidInput);

        // then
      }).toThrow();
    });
    test('라운드 입력이 10 초과인 경우 에러 발생', () => {
      // given
      const invalidInput = '11';

      expect(() => {
        // when
        new Race(invalidInput);

        // then
      }).toThrow();
    });
  });
});
