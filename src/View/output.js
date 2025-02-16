const outputView = {
  printGameResult(results) {
    console.log('\n실행 결과');
    results.forEach((round) => {
      round.forEach(({ name, position }) => {
        console.log(`${name} : ${'-'.repeat(position)}`);
      });
      console.log('');
    });
  },
  printWinners(winners) {
    console.log(`최종 우승자: ${winners.join(', ')}`);
  },
};

export default outputView;
