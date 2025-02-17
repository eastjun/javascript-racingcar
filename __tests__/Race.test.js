import Race from '../src/domain/Race';

test.each([['abcdef'], ['']])(
  '잘못된 carName이 들어왔을 때 유효성 검사가 가능한지 확인',
  (carName) => {
    expect(() => new Race(carName)).toThrow();
  }
);
