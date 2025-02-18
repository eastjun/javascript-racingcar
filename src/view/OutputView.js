class OutputView {
  static printOneGame(name, output) {
    console.log(`${name} : ${output}`);
    console.log('');
  }

  static printAllGame(nameList, outputList) {
    outputList.forEach((output, index) => {
      OutputView.printOneGame(nameList[index], output);
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
