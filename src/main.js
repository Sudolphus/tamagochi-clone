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
      $('.errorMessage').text('Enter a name for your fun-time pet!');
      return;
    } else if (petName.search(/[^A-Z\d]/i) > -1) {
      $('.errorMessage').text("That isn't much of a name! Enter a better one!");
      return;
    }
    $('.errorMessage').text('');
    let newPet = new Pet(petName);
    newPet.incrementNeeds();
    addNewPet(newPet, petType);
  });
}

$(document).ready(function() {
  attachNewPetListener();
});