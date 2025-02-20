class OutputView {
  static printOneGame(cars) {
    cars.forEach(car => {
      const carOutput = '-'.repeat(car.position);
      console.log(`${car.name} : ${carOutput}`);
    });
    console.log('');
  }

  static printAllGame(roundResultList) {
    roundResultList.forEach(roundResult => {
      OutputView.printOneGame(roundResult);
    });
  }

  static printGameStart() {
    console.log('\n실행 결과');
  }

  static printWinners(winnerOutput) {
    console.log(`최종 우승자: ${winnerOutput}`);
  }
}

export default OutputView;
