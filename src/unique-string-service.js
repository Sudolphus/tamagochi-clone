export class UniqueStringService {
  static async getRandomString() {
    try {
      let response = await fetch(`https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&unique=off&format=plain&rnd=new`);
      let responseVal;
      if (response.ok && response.status === 200) {
        responseVal = response;
      } else {
        responseVal = false;
      }
      return responseVal;
    } catch(error) {
      return false;
    }
  }
}