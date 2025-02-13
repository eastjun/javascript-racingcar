import readLineAsync from "./Input.js";
import Validate from "./Validate.js";
import Car from "./Car.js";
import Output from "./Output.js";

// 입출력 예시
async function run() {
  const name = await readLineAsync(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
  );

  //TODO: 자동차 이름 길이를 검증하는 코드 필요
  const names = name.split(",");
  const cars = names.map((carName) => new Car(carName));
  const output = new Output();
  // const validate = new Validate();

  const count = await readLineAsync("시도할 횟수는 몇 회인가요?\n");

  console.log("\n실행 결과");
  for (let i = 0; i < count; i++) {
    cars.forEach((car) => {
      car.tryMove();
      output.printCarPosition(car);
    });
    console.log();
  }

  let maxNum = 0;
  let carList = [];

  cars.forEach((car) => {
    if (car.position > maxNum) {
      maxNum = car.position;
      carList = [car.name];
    } else if (car.position === maxNum) {
      carList.push(car.name);
    }
    return;
  });

  console.log(`최종 우승자: ${carList.join(", ")}`);
}

run();
