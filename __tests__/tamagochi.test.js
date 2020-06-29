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
});