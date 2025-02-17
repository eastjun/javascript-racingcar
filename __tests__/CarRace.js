import { CarRace } from '../src/domain/index.js';

describe('CarRace', () => {
  let carRace;
  beforeEach(() => {
    carRace = new CarRace(['a', 'b', 'c'], 5);
  });

  describe('constructor()', () => {
    test('CarRace를 인자 없이도 생성할 수 있다.', () => {
      const carRaceWithEmptyArray = new CarRace();

      expect(carRaceWithEmptyArray).toBeDefined();
    });

    test('CarRace를 생성한다.', () => {
      expect(carRace).toBeDefined();
    });
  });

  describe('runRace()', () => {
    test('경주를 진행한다.', () => {
      carRace.runRace();
    });
  });

  describe('getWinners()', () => {
    test('경주를 진행하지 않았을 경우, 모든 차를 반환한다.', () => {
      const winners = carRace.getWinners();

      expect(winners).toContain('a');
      expect(winners).toContain('b');
      expect(winners).toContain('c');
    });

    test('경주를 진행했을 경우, 1개 이상의 차를 반환한다.', () => {
      const winners = carRace.getWinners();

      expect(winners.length).toBeGreaterThanOrEqual(1);
    });
  });
});
