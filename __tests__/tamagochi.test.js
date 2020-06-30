/* eslint-disable no-undef */
import { Pet } from './../src/pet.js';

describe("tamagochi-clone", ()=>{
  jest.useFakeTimers();
  let pet;

  beforeEach(()=>{
    pet = new Pet('Test');
    pet.incrementNeeds();
  });

  afterEach(()=>{
    jest.clearAllTimers();
  });

  test('Program can create a Pet object', ()=>{
    expect(pet).toBeDefined();
    expect(pet.name).toEqual('Test');
  });

  test('Program tracks a hunger stat', ()=>{
    expect(pet.hunger).toEqual(0);
  });

  test('Program tracks a fatigue stat', ()=>{
    expect(pet.fatigue).toEqual(0);
  });

  test('Program tracks a mood stat', ()=>{
    expect(pet.mood).toEqual(0);
  });

  test('program increments hunger as time passes', ()=>{
    jest.advanceTimersByTime(1001);
    expect(pet.hunger).toEqual(1);
  });

  test('program increments fatigue as time passes', ()=>{
    jest.advanceTimersByTime(2001);
    expect(pet.fatigue).toEqual(1);
  });

  test('program increments mood as time passes', ()=>{
    jest.advanceTimersByTime(1001);
    expect(pet.mood).toEqual(2);
  });

  test('should reset hunger stat if fed', ()=>{
    jest.advanceTimersByTime(5001);
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  test('should reset fatigue if nap', ()=>{
    jest.advanceTimersByTime(5001);
    pet.nap();
    expect(pet.fatigue).toEqual(0);
  });

  test('should reset mood if play', ()=>{
    jest.advanceTimersByTime(5001);
    pet.play();
    expect(pet.mood).toEqual(0);
  });

  test('should detect a game over if a stat hits the cap', ()=>{
    jest.advanceTimersByTime(60001);
    expect(pet.detectGameOver()).toBe(true);
  });

  test('should prevent input if game over', ()=>{
    jest.advanceTimersByTime(60001);
    pet.feed();
    pet.nap();
    pet.play();
    expect(pet.hunger).toEqual(60);
    expect(pet.fatigue).toEqual(30);
    expect(pet.mood).toEqual(120);
  });

  test('should count level up points when button is pushed', ()=>{
    pet.feed();
    pet.nap();
    pet.play();
    expect(pet.levelUpPoints).toEqual(3);
  });

  test('should reduce needs cap when level up points hits 5', ()=>{
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.needsCap).toEqual(110);
  });

  test('should reset level up points when a pet levels up', ()=>{
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.levelUpPoints).toEqual(0);
  });
});