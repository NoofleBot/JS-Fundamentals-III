console.log('My code is running');

var toDoListItems = [];
let userInput;

let addToListField = document.querySelector('#taskToAdd');
addToListField.addEventListener(
  "input",
  (eventObject) => userInput = (eventObject.target.value)
);

 function addToList() {
console.log(userInput)
};

