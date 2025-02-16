import { OUTPUT_MESSAGE } from '../Const.js';

const printLine = (message) => {
  console.log(message);
};

const formatRoundResult = (raceResult) => {
  return raceResult.reduce((acc, roundResult) => {
    return (acc +=
      `${roundResult.raceCarName}: ${'-'.repeat(roundResult.racePosition)}` +
      '\n');
  }, '');
};

const formatRaceResult = (raceResults) => {
  return raceResults.reduce((acc, raceResult) => {
    return (acc += formatRoundResult(raceResult) + '\n');
  }, '');
};

const formatWinner = (winnerList) => {
  return winnerList.map((winner) => winner.raceCarName).join(', ');
};

const printResult = (raceResults, winnerList) => {
  const formattedRaceResult = formatRaceResult(raceResults);

  console.log(
    '\n' +
      OUTPUT_MESSAGE.result +
      '\n' +
      formattedRaceResult +
      `최종 우승자: ${formatWinner(winnerList)}`
  );
};

export { printLine, formatRoundResult, printResult };
