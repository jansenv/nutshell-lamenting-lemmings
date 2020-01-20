// Coded by Spencer Truett

import { getTasks, saveTask, useTasks, editTask, patchTask } from "./TaskDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".addTaskButton");

export const resetTaskForm = () => {
  document.querySelector("#taskName").value = "";
  document.querySelector("#taskText").value = "";
  document.querySelector("#taskDate").value = "";
};

export const AddTaskForm = () => {
  eventHub.addEventListener("click", e => {
            
        if(e.target.id.startsWith("taskCompleted--")){
            const [ prefix, selectedCheckboxId] = e.target.id.split("--")
            let hiddenInputValue = document.querySelector(`#taskId--${selectedCheckboxId}`).value;
            let isCompleted = false 
            const checkboxes = document.querySelectorAll(".isCompletedCheckbox")
            for (const checkbox of checkboxes) { 
            if (checkbox.id === `taskCompleted--${selectedCheckboxId}`){
                isCompleted = checkbox.checked          
            }
        }  

        const editedCheckboxTask = {
            "id": parseInt(selectedCheckboxId, 10),
            "isCompleted": isCompleted
        }
         patchTask(editedCheckboxTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"))
        }) 
        } 
        

    if (e.target.id === "saveTaskButton") {
       
      const name = document.querySelector("#taskName").value
      const task = document.querySelector("#taskText").value
      const dueDate = document.querySelector("#taskDate").value
      const isCompleted =document.querySelector("#checkbox").value
        
        let hiddenInputValue = document.querySelector("#taskId").value
        
      if (hiddenInputValue !== "") {

        if (name === "" || task === "" || dueDate === "" ) {
          window.alert("Please Fill out all Input Fields")
        } else {
        const editedTask = {
          userId: parseInt(sessionStorage.getItem("activeUser"), 10),
          name: name,
          task: task,
          dueDate: dueDate,
          id: parseInt(document.querySelector("#taskId").value, 10),
          isCompleted: isCompleted
        };
        editTask(editedTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"));
          const dialogElement = e.target.parentNode;
          dialogElement.close()
        });
      }

        document.querySelector("#taskId").value = "";
      } else {
        if (name === "" || task === "" || dueDate === "" ) {
          window.alert("Please Fill out all Input Fields")
        } else {
        const newTask = {
          userId: parseInt(sessionStorage.getItem("activeUser"), 10),
          name: name,
          task: task,
          dueDate: dueDate,
          isCompleted: false
        }
        saveTask(newTask)
          .then(getTasks)
          .then(() => {
            const message = new CustomEvent("newTaskSaved");
            eventHub.dispatchEvent(message);
          });
          const dialogElement = e.target.parentNode;
          dialogElement.close()
          resetTaskForm();
      };

      }
    }
  });

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("editTask--")) {
      const [prefix, id] = e.target.id.split("--");

      const allTasks = useTasks();

      const theFoundTask = allTasks.find(taskObj => {
        return taskObj.id === parseInt(id, 10);
      });

      document.getElementById("taskId").value = theFoundTask.id;
      document.getElementById("taskName").value = theFoundTask.name;
      document.getElementById("taskText").value = theFoundTask.task;
      document.getElementById("checkbox").value = theFoundTask.isCompleted;

           
      const message = new CustomEvent("editTaskButtonClicked");
      eventHub.dispatchEvent(message);
    }
  });

  const render = () => {
    contentTarget.innerHTML = `<div class="addTask">
          <button id="button--addTask">Add Task</button>

          <dialog class="dialog--addTask">
          <label class="dialogTitles">Add a New Task!</label>
          <button class="button--close redX">X</button>
          <hr>
              <div>
                <input type="hidden" id="taskId" />
                
                <label for="taskName">Name of Task:</label>
                <input id="taskName" type="text" />
                <br>
                <label for="taskText">Task Description:</label>
                <input id="taskText" type="text" />
                <br>
                <label for="taskDate">Expected Completion Date:</label>
                <input type="datetime-local" id="taskDate">
                <br>

                <input type="hidden" id="taskId" />
                <input type="hidden" id="checkbox" value=FALSE />
              </div>

              <button class="button--save" id="saveTaskButton">Save</button>         
          </dialog>
      </div>`;
  };
  eventHub.addEventListener("userLoggedIn", e => {
    render();
  }) 
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML=""
  })  
  // render();
};
