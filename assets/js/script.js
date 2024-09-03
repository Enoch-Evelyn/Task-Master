
var formEl = document.querySelector("#task-form");
//selects div in html to target 
var tasksToDoEl = document.querySelector("#tasks-to-do");

//event listener that proceeds to add text content and insert it into a div when the button is clicked 
formEl.addEventListener("submit", function() {

//stops the page from reloading
  event.preventDefault();

  //creates an element 
  var listItemEl = document.createElement("li");
  //give the element a class of task-item
  listItemEl.className = "task-item";
  //give the element textContent of what is provided
  listItemEl.textContent = "This is a new task.";
  //add(append) all of what's LisItemEL to the targeted div 
  tasksToDoEl.appendChild(listItemEl);
});

