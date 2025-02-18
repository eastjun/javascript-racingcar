import {
  describe,
  beforeEach,
  afterEach,
  test,
  expect,
  jest,
} from "@jest/globals";

import { createCars, updateCarPosition } from "../src/domain/car.js";
import { findMaxValue } from "../src/utils/findMax.js";

describe("Car 로직 테스트", () => {
  // given
  let carPositionsByRound;

  beforeEach(() => {
    carPositionsByRound = [
      [
        { name: "세라", position: 2 },
        { name: "리바이", position: 3 },
      ],
      [
        { name: "세라", position: 3 },
        { name: "리바이", position: 4 },
      ],
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("자동차 이름이 담긴 배열을 입력받으면, 각 자동차의 이름과 초기 위치(position 0)를 포함하는 객체 배열로 변환한다.", () => {
    //given
    const initCarArr = ["세라", "세이지", "셀린"];

    // when
    const carNames = createCars(initCarArr);

    // then
    expect(carNames).toStrictEqual([
      { name: "세라", position: 0 },
      { name: "세이지", position: 0 },
      { name: "셀린", position: 0 },
    ]);
  });

  test("전진하는 자동차의 position 값을 업데이트한다.", () => {
    // given
    const car = { name: "세라", position: 2 };
    const newPosition = 3;

    // when
    const updatedCar = updateCarPosition(car, newPosition);

    // then
    expect(updatedCar).toEqual({ name: "세라", position: 3 });
  });

  test("주어진 자동차 배열에서 position 값이 가장 높은 자동차의 position 값을 반환한다.", () => {
    // when
    const max = findMaxValue(carPositionsByRound[1], "position");
    // then
    expect(max).toBe(4);
  });
});
