class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 50;
    this.playLevel = 10;
    this.sleepLevel = 10;
  }

  setFood() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  // setPlay() {
  //   setInterval(() => {
  //     this.playLevel--;
  //   }, 1000);
  // }

  didItDie() {
  if (this.foodLevel > 0) {
    return false;
  } else {
    return true;
  }
}

  feed() {
    this.foodLevel += 10;
  }
}

export { Tamagotchi };
