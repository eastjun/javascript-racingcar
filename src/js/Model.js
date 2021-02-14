import View from "./View.js";
import Validator from "./Validator.js";
import { COUNT_CLICKED_ELEMENT_LENGTH } from "./constatns.js";
class Model {
	constructor() {
		this.cars = [];
		this.count = 0;
	}

	initCars(carNames) {
		this.cars = this.generateCars(carNames);
	}

	generateCars(nameInputValue) {
		return nameInputValue.split(",").map((carName) => ({ name: carName, score: 0 }));
	}

	isAlreadyCountClicked($settingContainer) {
		return $settingContainer.childElementCount !== COUNT_CLICKED_ELEMENT_LENGTH;
	}

	setCount(value) {
		this.count = value;
	}

	runArrowRenderByCount() {
		for (let i = 0; i < this.count; i++) {
			const boolsAboutMovement = this.getBoolsAboutMovement();
			View.arrowRender(boolsAboutMovement);
		}
	}

	getBoolsAboutMovement() {
		const previousScores = [...this.cars].map((car) => car.score);
		this.iterateByCarsToMove();
		const boolsAboutMovement = this.cars.map((car, i) => car.score !== previousScores[i]);
		return boolsAboutMovement;
	}

	iterateByCarsToMove() {
		const moveOrNot = (car) => {
			const randomNumber = this.getRandomNumber({ startNumber: 0, endNumber: 9 });
			this.isInMovableRange(randomNumber, 4, 9) && this.move(car);
		};
		this.cars.forEach(moveOrNot);
	}

	getRandomNumber({ startNumber, endNumber }) {
		return startNumber + Math.floor(Math.random() * (endNumber - startNumber + 1));
	}

	isInMovableRange(number, min, max) {
		return number >= min && number <= max;
	}

	move(car) {
		car.score++;
	}

	getResultText() {
		const winners = this.getWinners();

		return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
	}

	getWinners() {
		const maxScore = this.getMaxScore();
		const carObjectsWithMaxScore = this.getCarObjectsWithMaxScore(maxScore);

		return carObjectsWithMaxScore.map((car) => car.name);
	}

	getMaxScore() {
		const scores = this.cars.map((car) => car.score);
		return Math.max(...scores);
	}

	getCarObjectsWithMaxScore(maxScore) {
		return this.cars.filter((car) => car.score === maxScore);
	}

	clearStates() {
		this.cars = [];
		this.count = 0;
	}

	validateName(inputValue) {
		const names = inputValue.split(",");

		if (!Validator.isFirstSubmittedName(this.cars.length)) {
			return { validity: false, alertMessage: "이미 이름이 등록되었습니다." };
		}
		if (Validator.isIncludeBlank(names)) {
			return { validity: false, alertMessage: "빈 문자인 이름은 등록할 수 없습니다." };
		}
		if (Validator.isOverScrollPreventLength(names.length)) {
			return { validity: false, alertMessage: "가로 스크롤 생성을 방지하기 위해 이름 등록은 9개 이하로 제한하고 있습니다." };
		}
		if (Validator.isOverFiveCharacter(names)) {
			return { validity: false, alertMessage: "5자를 넘는 이름은 등록할 수 없습니다." };
		}
		if (Validator.isDuplicatedName(names)) {
			return { validity: false, alertMessage: "중복된 이름은 등록할 수 없습니다." };
		}

		return { validity: true, alertMessage: null };
	}

	validateCount(submittedCount) {
		if (!Validator.isFirstSubmittedCount(this.count)) {
			return { validity: false, alertMessage: "이미 횟수를 설정하였습니다." };
		}
		if (!Validator.isValidInteger(submittedCount)) {
			return { validity: false, alertMessage: "자연수만 설정할 수 있습니다." };
		}
		if (!Validator.isUnderMaxCount(submittedCount)) {
			return { validity: false, alertMessage: "원활한 게임을 위해 횟수는 20000 이하로 제한하고 있습니다." };
		}

		return { validity: true, alertMessage: null };
	}
}

export default new Model();
