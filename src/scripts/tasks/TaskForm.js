// Coded by Spencer Truett

import { getTasks, saveTask, useTasks, editTask, patchTask } from "./TaskDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".addTaskButton");

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
                // if(checkbox.checked === false){
                //     isCompleted = false
                // }else{
                //     isCompleted = true
                // }
               
            }
        }  

        const editedCheckboxTask = {
            "id": parseInt(selectedCheckboxId,10),
            "isCompleted": isCompleted
        }
         patchTask(editedCheckboxTask)   
        } 
        

    if (e.target.id === "saveTaskButton") {
        
        
        let hiddenInputValue = document.querySelector("#taskId").value
        
      if (hiddenInputValue !== "") {

       

        const editedTask = {
          userId: parseInt(sessionStorage.getItem("activeUser"), 10),
          name: document.querySelector("#taskName").value,
          task: document.querySelector("#taskText").value,
          dueDate: document.querySelector("#taskDate").value,
          id: parseInt(document.querySelector("#taskId").value, 10),
          isCompleted: document.querySelector("#checkbox").value
        };

        editTask(editedTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"));
        });

        const resetTaskForm = () => {
          document.querySelector("#taskName").value = "";
          document.querySelector("#taskText").value = "";
          document.querySelector("#taskDate").value = "";
        };

        resetTaskForm();

        document.querySelector("#taskId").value = "";
      } else {
        const newEvent = {
          userId: sessionStorage.getItem("activeUser"),
          name: document.querySelector("#taskName").value,
          task: document.querySelector("#taskText").value,
          dueDate: document.querySelector("#taskDate").value,
          isCompleted: false
        };

        saveTask(newEvent)
          .then(getTasks)
          .then(() => {
            const message = new CustomEvent("newTaskSaved");
            eventHub.dispatchEvent(message);
          });

        const resetTaskForm = () => {
          document.querySelector("#taskName").value = "";
          document.querySelector("#taskText").value = "";
          document.querySelector("#taskDate").value = "";
        };

        resetTaskForm();
        const dialogElement = e.target.parentNode;
        dialogElement.close();
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

// // This here is the line of code for the checkbox that I undoubtedly will not finish before I go to bed, but this it my initial attempt
//     eventHub.addEventListener("click", e => {
//     if (e.target.id.startsWith("taskCompleted--")) {
//       const [prefix, id] = e.target.id.split("--");

//       const allTasks = useTasks();  

//       const theFoundTask = allTasks.find(taskObj => {
//         return taskObj.id === parseInt(id, 10);
//       });

//       document.getElementById("taskCompleted").value = theFoundTask.completed;

//       const message = new CustomEvent("completedButtonClicked");
//       eventHub.dispatchEvent(message);
//     }
//   });

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

              <button class="button--save button--close" id="saveTaskButton">Save</button>         
          </dialog>
      </div>`;
  };
  render();
};
