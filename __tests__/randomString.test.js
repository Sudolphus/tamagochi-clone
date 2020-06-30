/* eslint-disable no-undef */
import { UniqueStringService } from './../src/unique-string-service';

describe('Random string generator', ()=>{
  test('should return a random string', ()=>{
    // let randomString = new UniqueStringService();
    const testString = UniqueStringService.getRandomString();
    expect(testString).toBeTruthy();
  });
});