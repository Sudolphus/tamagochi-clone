export class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.fatigue = 0;
    this.mood = 0;
  }

  incrementHunger() {
    setInterval(()=>{
      this.hunger++;
    }, 1000);
  }
}