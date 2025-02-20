export default class Car {
  position;

  name;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go(zeroToNine) {
    const randomNumber = zeroToNine;
    if (randomNumber >= 4) this.position += 1;
  }
}
