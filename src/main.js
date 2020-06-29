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
    if (!petName) {
      alert('Enter a name for your new pet');
      return;
    }
    let newPet = new Pet(petName);
    addNewPet(newPet);
  });
}

$(document).ready(function() {
  attachNewPetListener();
});