class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 40;
    this.playLevel = 20;
    this.sleepLevel = 60;
    this.age = 0;
  }

  setFood() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  setAge() {
    setInterval(() => {
      this.age +=1
    }, 300000);
  }

  didItDieStarvation() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  didItDieAge() {
    if (this.age < 3) {
      return false;
    } else {
      return true;
    }
  }

  didItDieNeglect() {
    if (this.playLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel += 10;
  }

  play() {
    this.foodLevel += 5;
  }

  sleeping() {
    setInterval(()=> {
      this.sleepLevel = 60;
    }, 60000);
  }
}

export { Tamagotchi };
