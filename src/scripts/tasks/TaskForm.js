// Coded by Spencer Truett

import { editTask, saveTask, useTasks } from "./TaskDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".tasks");

const TaskFormComponent = () => {
  eventHub.addEventListener("editButtonClicked", event => {
    const taskToBeEdited = event.detail.taskId;

    const allTasksArray = useTasks()

    const theFoundTask = allTasksArray.find(currentTaskObject => {
      return currentTaskObject.id === parseInt(taskToBeEdited, 10);
    });

    document.querySelector("#task-id").value = theFoundTask.id;
    document.querySelector("#task-name").value = theFoundTask.name;
    document.querySelector("#task-text").value = theFoundTask.task;
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {

      const hiddenInputValue = document.querySelector("#task-id").value;

      if (hiddenInputValue !== "") {
        const editedTask = {
          userId: sessionStorage.getItem("activeUser"),
          id: parseInt(document.querySelector("#task-id").value, 10),
          name: document.querySelector("#task-name").value,
          task: document.querySelector("#task-text").value,
          date: Date.now()
        };

        editTask(editedTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent("taskHasBeenEdited"));
        });
      } else {

        const newTask = {
          name: document.querySelector("#task-name").value,
          task: document.querySelector("#task-text").value,
          date: Date.now()
        };

        saveTask(newTask).then(() => {
          const message = new CustomEvent("taskCreated");
          eventHub.dispatchEvent(message);
        });
      }
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showTasks") {
      const message = new CustomEvent("showTaskButtonClicked");
      eventHub.dispatchEvent(message);
    }
  });

  const render = () => {
    contentTarget.innerHTML = `
  <div class="task">

    <button id="button--newTask">Add Task</button>

      <dialog class="dialog--newTask" id="details--newTask">
        
        <div class="task_form">
          Task Name: <input type="text" id="task-name" />
        </div>

        <div class="task_form">
          Description: <input type="text" id="task-text" />
        </div>

        <div class="task_form">
          Due Date: <input type="text" id="task-dueDate" />
        </div>

        <input type="checkbox" name="taskCompleted" value="taskCompleted"> Completed?<br>

        <button class="task_form" id="saveTask">Save Task</button>
        <button class="task_form" id="button--close">Close</button>
      </dialog>
  </div>
  `;
  };

  render();
};

export default TaskFormComponent;
