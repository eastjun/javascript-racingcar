import { state } from "./index.js";
import {
  resetView,
  resetCarNamesInput,
  resetTryNumInput,
  setWinnerView,
} from "./display-utils.js";
import {
  carNamesSection,
  tryNumSection,
  resultSection,
  winnerSection,
} from "./elements.js";
import {
  deleteLoading,
  setCarNamesInResultView,
  setIconsInResultView,
  getWinnerText,
  resetGameResultSections,
} from "./display-utils.js";

const GO_NUMBER = 3;

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const getTotalStep = () => {
  return state.cars.map((car) => {
    return car.totalStep;
  });
};

const setTotalStep = () => {
  state.cars.forEach((car) => {
    const randomNum = getRandomNum();
    if (randomNum > GO_NUMBER) {
      car.go();
    }
  });
};

const startGame = () => {
  setCarNamesInResultView(); // 0초에는 car name 보여주고 game 진행 X
};

const finishGame = (resultDivs, goStep) => {
  const winnerArray = getWinner();
  const winnerText = getWinnerText(winnerArray);

  deleteLoading(resultDivs);
  setWinnerView(winnerArray);
  setTimeout(() => alert(`축하합니다. ${winnerText} 우승했습니다.`), 2000);
  clearInterval(goStep);
};

const playGame = (resultDivs, prevTotalStep) => {
  setTotalStep();
  deleteLoading(resultDivs);

  const currentTotalStep = getTotalStep();
  setIconsInResultView(resultDivs, prevTotalStep, currentTotalStep);

  return currentTotalStep;
};

const playGameForSecond = () => {
  const tryNumInput = tryNumSection.querySelector("input");
  let second = 0;
  let prevTotalStep = getTotalStep();

  const goStep = setInterval(() => {
    const resultDivs = resultSection
      .querySelector("div")
      .querySelectorAll(".one-car-result");

    if (second === 0) {
      startGame();
    } else if (second === Number(tryNumInput.value) + 1) {
      finishGame(resultDivs, goStep);
    } else {
      prevTotalStep = playGame(resultDivs, prevTotalStep);
    }

    second++;
  }, 1000);
};

export const playRacingGame = () => {
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });
  resetGameResultSections(); // reset result, winner section

  playGameForSecond();
};
// 우승자 이름을 배열로 리턴한다.
export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => {
    return car.totalStep === maxTotalStep;
  });
  const winnerNames = winners.map((winner) => {
    return winner.name;
  });

  return winnerNames;
};

export const resetGame = () => {
  const carNamesBtn = carNamesSection.querySelector("button");
  const tryNumBtn = tryNumSection.querySelector("button");
  const resetBtn = winnerSection.querySelector("button");

  resetBtn.addEventListener("click", () => {
    resetView();
    state.cars = [];

    resetCarNamesInput();
    resetTryNumInput();
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};
