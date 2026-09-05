const dialog = document.querySelector('#reservationDialog');
const openButtons = document.querySelectorAll('#openReservation, .js-reservation-link');
const closeButton = document.querySelector('#closeReservation');
const finishButton = document.querySelector('#finishReservation');
const form = document.querySelector('#reservationForm');
const formView = document.querySelector('#formView');
const successView = document.querySelector('#successView');
const dateInput = document.querySelector('input[name="date"]');

dateInput.min = new Date().toLocaleDateString('sv-SE');

function resetReservation() {
  form.reset();
  formView.hidden = false;
  successView.hidden = true;
}

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    resetReservation();
    dialog.showModal();
  });
});

closeButton.addEventListener('click', () => dialog.close());
finishButton.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  formView.hidden = true;
  successView.hidden = false;
});
