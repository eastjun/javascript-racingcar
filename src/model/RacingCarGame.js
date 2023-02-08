class RacingCarGame {
  getResult(carNamesMap, totalTrialCount) {
    let carCount = 0;
    let carResult = '\n실행 결과\n';

    for (const carName of carNamesMap.keys()) {
      carResult += `${carName} : -\n`;
    }

    carResult += '\n';

    //게임 진행
    while (carCount < totalTrialCount) {
      carNamesMap.forEach((_, carName) => {
        if (this.goForward()) {
          carNamesMap.set(carName, carNamesMap.get(carName) + 1);
        }
      });

      //마지막
      for (const carName of carNamesMap.keys()) {
        const forwardCount = carNamesMap.get(carName);
        carResult += `${carName} : ${'-'.repeat(forwardCount)}\n`;
      }
      carResult += '\n';

      carCount += 1;
    }

    // 우승자 더하기
    carResult += this.getWinnerCar(carNamesMap);
    return carResult;
  }

  goForward() {
    const GO_FORWARD = 4;
    return Math.floor(Math.random() * 10) >= GO_FORWARD;
  }

  getWinnerCar(carNamesMap) {
    const result = [];
    const maxCarCount = Math.max(...carNamesMap.values());

    for (const car of carNamesMap.entries()) {
      const [carName, count] = car;

      if (maxCarCount === count) result.push(carName);
    }

    //pobi, honux가 최종 우승했습니다.
    //결과 문자열 만들기
    return result.join(', ') + '이(가) 최종 우승했습니다.';
  }
}

module.exports = RacingCarGame;
