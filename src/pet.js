export class Pet {
  constructor(name) {
    this.name = name;
    this.gameOver = false;
    this.hunger = 0;
    this.fatigue = 0;
    this.mood = 0;
    this.needsCap = 120;
  }

  detectGameOver() {
    if (this.hunger >= this.needsCap || this.fatigue >= this.needsCap || this.mood >= this.needsCap || this.gameOver === true) {
      return true;
    } else {
      return false;
    }
  }
  incrementNeeds() {
    this.incrementHunger();
    this.incrementFatigue();
    this.incrementMood();
  }

  incrementHunger() {
    setInterval(()=>{
      this.hunger++;
      this.gameOver = this.detectGameOver();
    }, 1000);
  }

  incrementFatigue() {
    setInterval(()=>{
      this.fatigue++;
      this.gameOver = this.detectGameOver();
    }, 2000);
  }

  incrementMood() {
    setInterval(()=>{
      this.mood+=2;
      this.gameOver = this.detectGameOver();
    }, 1000);
  }

  feed() {
    if (!this.gameOver) {
      this.hunger = 0;
    }
  }

  nap() {
    if (!this.gameOver) {
      this.fatigue = 0;
    }
  }

  play() {
    if (!this.gameOver) {
      this.mood = 0;
    }
  }
}