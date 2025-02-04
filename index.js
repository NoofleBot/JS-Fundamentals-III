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

var ul = document.getElementById('list'); //start of markDone section

function markDoneOrDelete(event) {
  if (event.target.id === "ready-to-delete") {
    event.target.remove();
  }
    event.target.style = "text-decoration: line-through;";
    event.target.id = "ready-to-delete";
};

ul.addEventListener("click", markDoneOrDelete);


//bug midigation: prevent ul from ever getting id=ready-to-delete
//or text-decoration: line-through

//querySelectorAll and/or a ForEach loop could be your friend here
