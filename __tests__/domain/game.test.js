import racingGame from '../../src/Model/game.js';

describe('게임 로직 (racingGame)', () => {
  test('shouldMove는 4 이상이면 true를 반환해야 한다.', () => {
    expect(racingGame.shouldMove(4)).toBe(true);
    expect(racingGame.shouldMove(7)).toBe(true);
  });

  test('shouldMove는 3 이하이면 false를 반환해야 한다.', () => {
    expect(racingGame.shouldMove(3)).toBe(false);
    expect(racingGame.shouldMove(0)).toBe(false);
  });
});
