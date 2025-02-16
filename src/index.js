import { getCarNames, getMoveCount } from "./view/input.js";
import playGame from "./domain/playGame.js";
import findWinners from "./domain/findWinners.js";
import { displayWinner } from "./view/output.js";
import pipe from "./utils/pipe.js";

async function run() {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  pipe(playGame, findWinners, displayWinner)(carNames, moveCount);
}

run();
