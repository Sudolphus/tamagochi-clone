/* eslint-disable no-undef */
import { Pet } from './../src/pet.js';

describe("tamagochi-clone", ()=>{
  jest.useFakeTimers();
  let pet;

  beforeEach(()=>{
    pet = new Pet('Test');
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
  })
});