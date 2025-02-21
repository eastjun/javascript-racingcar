import { OUTPUT_MESSAGE } from './constants.js';

function printErrorMessage(errorMessage) {
    console.log(`${errorMessage}\n`);
}

function printResultMessage() {
    console.log(OUTPUT_MESSAGE.RACING_RESULT_TITLE);
}

function printOneRoundResult(result) {
    cars.forEach(({ name, position }) => {
        console.log(`${name} : ${'-'.repeat(position)}`);
    });
    console.log();
}

function printWinners(winners) {
    console.log(`${OUTPUT_MESSAGE.WINNER_RESULT_TITLE} ${winners.join(', ')}`);
}

const OutputView = {
    printErrorMessage,
    printResultMessage,
    printOneRoundResult,
    printWinners
};

export default OutputView;
