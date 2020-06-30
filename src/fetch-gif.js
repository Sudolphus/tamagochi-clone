export async function getGif(animal) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${animal}&limit=1&offset=0&rating=G&lang=en`;
  fetch(url)
    .then(function(response) {
      if (!response.ok || response.status != 200) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function() {
      return false;
    });
}