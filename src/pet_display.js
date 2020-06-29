import $ from 'jQuery';

function refreshPetDisplay(pet) {
  const hungerValue = $(`#hungerValue${pet.name}`);
  const fatigueValue = $(`#fatigueValue${pet.name}`);
  const moodValue = $(`#moodValue${pet.name}`);
  hungerValue.html(pet.hunger);
  fatigueValue.html(pet.fatigue);
  moodValue.html(pet.mood);
}

function addPetButtonListeners(pet) {
  const petBox = $(`${pet.name}`);
  petBox.on('click', '.feedPet', function(event) {
    event.preventDefault;
    pet.feed();
    refreshPetDisplay(pet);
  });
  petBox.on('click', '.napPet', function(event) {
    event.preventDefault();
    pet.nap();
    refreshPetDisplay(pet);
  });
  petBox.on('click', '.playPet', function(event) {
    event.preventDefault();
    pet.play();
    refreshPetDisplay(pet);
  });
}

export function addNewPet(pet) {
  let petHTML = `<div class='petBox' id='${pet.name}'><h3>${pet.name}</h3><div class='row'>`;
  petHTML += `<div class = 'col-md-4'><h5>Hunger</h5><br><span id='hungerValue${pet.name}'></span><br><button class='btn btn-info feedPet'>Feed!</button></div>`;
  petHTML += `<div class = 'col-md-4'><h5>Fatigue</h5><br><span id='fatigueValue${pet.name}'></span><br><button class='btn btn-info napPet'>Nap!</button></div>`;
  petHTML += `<div class = 'col-md-4'><h5>Mood</h5><br><span id='moodValue${pet.name}'></span><br><button class='btn btn-info playPet'>Play!</button></div></div>`;
  $('#petList').append(petHTML);
  addPetButtonListeners(pet);
  setInterval(refreshPetDisplay(pet), 1000);
}