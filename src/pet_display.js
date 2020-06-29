import $ from 'jQuery';

function addPetButtonListeners(pet) {
  const petBox = $(`${pet.name}`);
  petBox.on('click', '.feedPet', function(event) {
    event.preventDefault;
    pet.feed();
  });
  petBox.on('click', '.napPet', function(event) {
    event.preventDefault();
    pet.nap();
  });
  petBox.on('click', '.playPet', function(event) {
    event.preventDefault();
    pet.play();
  });
}

export function addNewPet(pet) {
  let petHTML = `<div class='petBox' id='${pet.name}'><h3>${pet.name}</h3><div class='row'>`;
  petHTML += `<div class = 'col-md-4'><h5>Hunger</h5><br><span id='hungerValue${pet.name}'></span><br><button class='btn btn-info feedPet'>Feed!</button></div>`;
  petHTML += `<div class = 'col-md-4'><h5>Fatigue</h5><br><span id='fatigueValue${pet.name}'></span><br><button class='btn btn-info napPet'>Nap!</button></div>`;
  petHTML += `<div class = 'col-md-4'><h5>Mood</h5><br><span id='moodValue${pet.name}'></span><br><button class='btn btn-info playPet'>Play!</button></div></div>`;
  $('#petList').append(petHTML);
  addPetButtonListeners(pet);
  setInterval(()=>{
    if (pet.gameOver === false) {
      const hungerSpan = $(`#hungerValue${pet.name}`);
      const fatigueSpan = $(`#fatigueValue${pet.name}`);
      const moodSpan = $(`#moodValue${pet.name}`);
      hungerSpan.html(pet.hunger);
      fatigueSpan.html(pet.fatigue);
      moodSpan.html(pet.mood);
    } else {
      $(`${pet.name}`).html("Game Over!");
      return;
    }
  });
}