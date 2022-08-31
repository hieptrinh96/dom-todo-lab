// Grabbing each element by their unique id's
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('submit-button');
const ulEl = document.getElementById('todo-list');
const resetButton = document.getElementById('reset');

// Adding event listeners to interact with them
buttonEl.addEventListener('click', noteCreator);

ulEl.addEventListener('click', removeNote)

resetButton.addEventListener('click', clearAll)

function clearAll(e) {
  // const liElements = document.querySelector('li');
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  }
}

function removeNote(e) {
  return e.target.remove();
}



function noteCreator(e) {
  const liElement = document.createElement('li');
  liElement.textContent = inputEl.value;
  inputEl.value = '';
  ulEl.appendChild(liElement);
}




