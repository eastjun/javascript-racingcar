import { $ } from "./getElement.js";

export const showWinnerAndRestartButton = () => {
  $("winner-area").hidden = false;
  $("restart-button").hidden = false;
};

export const setRacingWinnerView = winners => {
  $("racing-winner").innerHTML = winners.join(", ");
};
