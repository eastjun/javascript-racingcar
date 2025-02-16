class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(isMove) {
    this.position += Number(isMove);
  }
}

export default Car;
