class OutputView {
  static printEachResult(carName, position) {
    const positionString = '-'.repeat(position);

    console.log(`${carName} : ${positionString}`);
  }

  static printMessage(message) {
    console.log(message);
  }

  static printWinner(winners) {
    console.log(`최종 우승자: ${winners.join(', ')}`);
  }

  static printRaceResult(cars, tryCount) {
    OutputView.printMessage('\n실행 결과');
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        OutputView.printEachResult(car.name, car.history[i]);
      });
      OutputView.printMessage('');
    }
  }
}

export default OutputView;
