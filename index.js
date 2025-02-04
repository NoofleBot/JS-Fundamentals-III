console.log('My code is running');

var form = document.getElementById('addTaskForm');
function handleForm(event) { event.preventDefault(); } //prevent page from refreshing when form is submitted
form.addEventListener('submit', handleForm);

function addToList() {
  var inputValue = (document.getElementById('taskToAdd').value); //extract value of form input on submit and put it in inputValue
  document.getElementById('taskToAdd').value = '' //make the form text box empty apon submit

  let newLi = document.createElement('li');
  let newLiContent = document.createTextNode(inputValue);
  newLi.appendChild(newLiContent); //append content of inputValue to newLi
  let container = document.querySelector("#list");
  container.appendChild(newLi);
};

