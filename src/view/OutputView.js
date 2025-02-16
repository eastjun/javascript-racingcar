const MESSAGE = {
    RACING_RESULT_TITLE: '\n실행 결과',
    WINNER_RESULT_TITLE: '최종 우승자:',
};

function printErrorMessage(errorMessage) {
    console.log(`${errorMessage}\n`);
}

function printResultMessage() {
    console.log(MESSAGE.RACING_RESULT_TITLE);
}

function printOneRoundResult(cars) {
    cars.forEach(car => {
        console.log(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    console.log();
}

function printWinners(winners) {
    console.log(`${MESSAGE.WINNER_RESULT_TITLE} ${winners.join(', ')}`);
}

const OutputView = {
    printErrorMessage,
    printResultMessage,
    printOneRoundResult,
    printWinners
};

export default OutputView;
