// Coded by Spencer Truett

import { getTasks, saveTask } from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addTaskButton")

export const AddTaskForm = () => {

    eventHub.addEventListener("click", e => {
        if (e.target.id === "saveTaskButton") {

        const newEvent = {
            userId: sessionStorage.getItem("activeUser"),
            name: document.querySelector("#taskName").value,
            task: document.querySelector("#taskText").value,
            dueDate: document.querySelector("#taskDate").value,
        }
        saveTask(newEvent).then(getTasks).then(() => {
            const message = new CustomEvent("newTaskSaved")
            eventHub.dispatchEvent(message)
        })
        const resetTaskForm = () => {
            document.querySelector("#taskName").value = ""
            document.querySelector("#taskText").value = ""
            document.querySelector("#taskDate").value = ""
        }
        resetTaskForm()
        const dialogElement = e.target.parentNode
        dialogElement.close()
    }
})



    const render = () => {
    contentTarget.innerHTML =   
      `<div class="addTask">
          <button id="button--addTask">Add Task</button>

          <dialog class="dialog--addTask">
          <label class="dialogTitles">Add a New Task!</label>
          <button class="button--close">X</button>
          <hr>
              <div>
                <label for="taskName">Name of Task:</label>
                <input id="taskName" type="text" />
                <br>
                <label for="taskText">Task Description:</label>
                <input id="taskText" type="text" />
                <br>
                <label for="taskDate">Expected Completion Date:</label>
                <input type="datetime-local" id="taskDate">
                <br>
              </div>
              <button class="button--save" id="saveTaskButton">Save</button>         
          </dialog>
      </div>`
    }
    render()
}
