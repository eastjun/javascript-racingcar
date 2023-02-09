/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
// const Car = require('../src/Car');
const GameManager = require('../src/GameManager');
const RandomGenerator = require('../src/utils/RandomGenerator');

const mockRandom = (number) => {
  RandomGenerator.pickRandomNumber = jest.fn();
  RandomGenerator.pickRandomNumber.mockReturnValueOnce(number);
};

const mockRandoms = (numbers) => {
  RandomGenerator.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomGenerator.pickRandomNumber);
};

describe('GameManager Test', () => {
  test('Random mock Test', () => {
    mockRandom(10);
    expect(RandomGenerator.pickRandomNumber()).toBe(10);
  });

  test.each([
    [9, true],
    [4, true],
    [3, false],
    [0, false],
  ])('isFoward Test Random value : %i', (number, expected) => {
    mockRandom(number);
    const gameManager = new GameManager();
    expect(gameManager.isForward()).toEqual(expected);
  });

  test.each([
    [['yun', 'park', 'kim'], [9, 0, 1, 8, 1, 2, 7, 5, 6], ['yun']],
    [
      ['choi', 'ann', 'lee', 'gabi'],
      [0, 0, 5, 5, 0, 0, 9, 9],
      ['lee', 'gabi'],
    ],
    [
      ['aa', 'bb'],
      [0, 0, 5, 5, 0, 0, 9, 9],
      ['aa', 'bb'],
    ],
  ])('judgeWinners Test (%#)', (carNames, moves, winners) => {
    const gameManager = new GameManager();
    const cars = gameManager.generateCars(carNames);
    mockRandoms(moves);
    gameManager.moveCars(cars);
    expect(gameManager.judgeWinners([...cars])).toEqual(winners);
  });
});
