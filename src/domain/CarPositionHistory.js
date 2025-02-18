class CarPositionHistory {
  constructor() {
    this.history = new Map();
  }

  saveHistory(car) {
    if (!this.history.has(car.name)) {
      this.history.set(car.name, []);
    }
    this.history.get(car.name).push(car.position);
  }

  getHistory(carName) {
    return this.history.get(carName) || [];
  }
}

export default CarPositionHistory;
