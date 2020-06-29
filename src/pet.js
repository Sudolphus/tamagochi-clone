export class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.fatigue = 0;
    this.mood = 0;
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
}