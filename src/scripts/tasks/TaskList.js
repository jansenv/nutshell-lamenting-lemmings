// Coded by Spencer Truett

import { useTasks, deleteTask } from "./TaskDataProvider.js"
import { Task } from "./Task.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasks")

const TaskList = () => {
  const tasks = useTasks()

  eventHub.addEventListener("taskHasBeenEdited", e => {
    render(useTasks())
  })
  
  eventHub.addEventListener("newTaskSaved", e => {
    render(useTasks())
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteTask--")) {
      const [prefix, id] = e.target.id.split("--")
      deleteTask(id).then(() => render(useTasks()))
    }
  })

  const render = (eve) => {
    contentTarget.innerHTML = 
    eve.map(task => Task(task)).join("")
  }
  eventHub.addEventListener("userLoggedIn", e => {
    render(tasks)
    initializeDialogButtonEvents()
  })
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML = ""
  })  
  // render(tasks)
 
}

export default TaskList