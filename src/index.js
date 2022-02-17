import Car from './Car.js';
import { ID, MESSAGE, INTERVAL } from './constants.js';
import { getElement, changeActivity } from './utils/dom.js';
import { removeAllChildNodes, clearLoadingView, resultView, winnerAlert, initRacingStatus, carMovementView, loadingView } from './view.js';
import {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  getMaxCount
} from './utils/index.js';
class CarRacing {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitCarName(getElement(ID.CAR_NAMES_INPUT).value);
    })

    getElement(ID.RACING_COUNT_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitRacingCount(getElement(ID.RACING_COUNT_INPUT).value);
    })

    getElement(ID.RESTART_BUTTON).addEventListener('click', ()=>{
      this.onClickRestart();
    })
  }

  onSubmitCarName(names) {
    const carNames = parseCarName(names);
    if (!validateCarNameLength(carNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!validateDuplicateCarName(carNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    getElement(ID.RACING_COUNT_INPUT).focus();
    this.cars = carNames.map(name => new Car(name));

    changeActivity([ID.CAR_NAMES_INPUT, ID.CAR_NAMES_SUBMIT]);
  }

  onSubmitRacingCount(count) {
    if (!this.cars.length) {
      return alert(MESSAGE.NO_CAR);
    }
    if (!validateRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }

    changeActivity([ID.RACING_COUNT_INPUT, ID.RACING_COUNT_SUBMIT]);
    this.progressGame(parseInt(count))
  }

  onClickRestart() {
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    removeAllChildNodes(getElement(ID.RACING_WINNERS));
    removeAllChildNodes(getElement(ID.RACING_STATUS));
    changeActivity([ID.CAR_NAMES_INPUT, ID.CAR_NAMES_SUBMIT, ID.RACING_COUNT_INPUT, ID.RACING_COUNT_SUBMIT]);
    getElement(ID.RESTART_BUTTON).style.visibility="hidden";
    this.cars = [];
  }

  progressGame(count){
    let startTime = 0
    let progressCount = 0;
    let progressSecond = 0;
    initRacingStatus(this.cars);

    const render = (timeStamp) => {
      const timeStandard = timeStamp;
      if(!startTime) startTime = timeStandard;
      progressCount = Math.floor((timeStamp - startTime)/1000);

      if(progressCount === count){
        cancelAnimationFrame(render);
        this.moveCar(this.cars);
        const winners = this.findWinner(this.cars);
        clearLoadingView(this.cars);
        resultView(winners)
        return this.delayResult(winners);
      }
      this.cars.forEach((car)=>{
        getElement(`car-status-${car.name}`).insertAdjacentHTML('beforeend', '<div class="loader></div>')
      })
      if(progressSecond!==progressCount){
        this.moveCar(this.cars);
        progressSecond=progressCount;
      }
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }

  moveCar(cars) {
    cars.forEach((car)=>{
      if(car.move()){
        const carStatus = getElement(`car-status-${car.name}`)
        carStatus.replaceChild(carMovementView(), carStatus.lastChild);
        carStatus.insertAdjacentHTML('beforeend', loadingView);
      }
    });
  }
  
  delayResult(winners)  {
    setTimeout(()=>{
      winnerAlert(winners)
    }, INTERVAL.ALERT);
  }
  
  findWinner(cars) {
    const maxCount = getMaxCount(cars);
    return cars.filter(
      car => car.racingCount === maxCount,
    ).map((car)=>car.name).join(',');
  }
}

new CarRacing();
