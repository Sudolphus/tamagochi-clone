import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pet } from './pet';
import { addNewPet } from './pet_display';

function attachNewPetListener() {
  $('#addPet').click(function(event) {
    event.preventDefault();
    const petName = $('#namePet').val();
    const petType = $('#petTypeSelector').val();
    if (!petName) {
      $('.errorMessage').show();
      return;
    }
    $('.errorMessage').hide();
    let newPet = new Pet(petName);
    newPet.incrementNeeds();
    addNewPet(newPet, petType);
  });
}

$(document).ready(function() {
  attachNewPetListener();
});