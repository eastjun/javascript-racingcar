import { test, expect } from "@jest/globals";

import { findWinners } from "../src/domain/winner.js";

test("should ", () => {});
"최종 라운드에서 가장 멀리 이동한 자동차(우승자)를 찾아 반환한다.",
  () => {
    // given
    const carPositionsByRound = [
      [
        { name: "세라", position: 2 },
        { name: "리바이", position: 3 },
      ],
      [
        { name: "세라", position: 3 },
        { name: "리바이", position: 4 },
      ],
    ];
    // when
    const winners = findWinners(carPositionsByRound.at(-1));
    // then
    expect(winners.map((car) => car.name)).toStrictEqual(["리바이"]);
  };
