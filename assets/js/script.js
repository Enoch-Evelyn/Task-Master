
//Id is selected prefaced with a "#" while classes are prefaced with "."
//El used to identify this a Dom element 


// var taskItemEl = document.createElement("li");

// taskItemEl.textContent = "hello";


// //selects what element is being targeted 
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// // //appends the element of taskItemEl
// tasksToDoEl.appendChild(taskItemEl);






// var buttonEl = window.document.querySelector("#save-task");
// console.log(buttonEl)


// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
//   });



var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});