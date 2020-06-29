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
    if (this.hunger >= this.needsCap || this.fatigue >= this.needsCap || this.mood >= this.needsCap) {
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
    }, 1000);
  }

  incrementFatigue() {
    setInterval(()=>{
      this.fatigue++;
    }, 2000);
  }

  incrementMood() {
    setInterval(()=>{
      this.mood+=2;
    }, 1000);
  }

  feed() {
    this.hunger = 0;
  }

  nap() {
    this.fatigue = 0;
  }

  play() {
    this.mood = 0;
  }
}