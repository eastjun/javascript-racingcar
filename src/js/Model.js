import { SETTING } from "./constants.js"
import { getRandomNumber } from "./utils.js"

class Model {
	constructor() {
		this._cars = []
		this._count = 0
	}

	get cars() {
		return this._cars
	}

	get count() {
		return this._count
	}

	set cars(value) {
		this._cars = value.split(",").map((name) => ({ name, score: 0 }))
	}

	set count(value) {
		this._count = value
	}

	initializeCars(inputValue) {
		this.cars = inputValue
	}

	move(index) {
		this.cars[index] !== undefined && this.cars[index].score++
	}

	clearStates() {
		this._cars = []
		this._count = 0
	}

	move(carIndex) {
		const randomNumber = getRandomNumber(
			SETTING.RANDOM_NUMBER.MIN,
			SETTING.RANDOM_NUMBER.MAX
		)
		randomNumber >= SETTING.RANDOM_NUMBER.MIN_MOVABLE && this.move(carIndex)
	}

	moveCars() {
		const previousScores = this.cars.map((car) => car.score)
		this.cars.forEach((_, index) => this.move(index))
		const movedCars = this.cars.map((car, i) => car.score !== previousScores[i])

		return { movedCars: movedCars }
	}

	get winners() {
		const maxScore = Math.max(...this.cars.map((car) => car.score))
		const maxScoreCars = this.cars.filter((car) => car.score === maxScore)
		return maxScoreCars.map((car) => car.name)
	}
}

export default Model
