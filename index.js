console.log('My code is running');

var toDoListItems = [];
let userInput;

var form = document.getElementById('addTaskForm');
function handleForm(event) { event.preventDefault(); } //prevent page from refreshing when form is submitted
form.addEventListener('submit', handleForm);

function addToList() {
console.log(document.getElementById("taskToAdd").value); //extract & console log value of form input on submit
document.getElementById("taskToAdd").value = "" //make the form text box empty apon submit
};

