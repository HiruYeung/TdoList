// script.js
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    const task = taskInput.value;
    const priority = prioritySelect.value;
    
    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }
    
    const li = document.createElement("li");
    
    const clickBtn = document.createElement("h5");
    let isClicked = false;
    clickBtn.addEventListener("click", function() {
        if (isClicked) {
          clickBtn.style.backgroundColor = "rgb(227, 227, 227)"; 
      } else {
          clickBtn.style.backgroundColor = "aqua";
      }
        isClicked = !isClicked;
    });

    li.appendChild(clickBtn)

    const taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    const Level = document.createElement("p");
    Level.textContent= priority;
    li.appendChild(Level);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = "";
});

