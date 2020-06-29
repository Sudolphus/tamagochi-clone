import $ from 'jQuery.js';
import 'bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pet } from './pet.js';

function attachNewPetListener() {
  $('#addPet').click(function(event) {
    event.preventDefault();
    const petName = $('#petName').val();
    if (!petName) {
      alert('Enter a name for your new pet');
      return;
    }
    let newPet = new Pet(petName);
    alert(newPet.name);
  });
}

$(document).ready(function() {
  attachNewPetListener();
});