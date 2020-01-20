// Coded by Spencer Truett

import { useTasks, deleteTask } from "./TaskDataProvider.js"
import { Task } from "./Task.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasksToDo")
const contentTargetPart2 = document.querySelector(".tasksCompleted")

const TaskList = () => {
  const tasks = useTasks()

  eventHub.addEventListener("taskHasBeenEdited", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)
    const completedTaskArray = newTasks.filter(task => task.isCompleted === true)
    notCompletedTaskRender(notCompletedTaskArray)
    completedTaskRender(completedTaskArray)
    initializeDialogButtonEvents()
  })
  
  eventHub.addEventListener("newTaskSaved", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)
    notCompletedTaskRender(notCompletedTaskArray)
    initializeDialogButtonEvents()
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteTask--")) {
      const [prefix, id] = e.target.id.split("--")
      deleteTask(id).then(() => render(useTasks()))
    }
  })




  const completedTaskRender = (taskArray) => {
    contentTargetPart2.innerHTML = `<h2>CompletedTasks</h2> ${taskArray.map (task => Task(task)).join("")}`
  }


  const notCompletedTaskRender = (taskArray) => {
    contentTarget.innerHTML = `<h2>To Do List:</h2> ${taskArray.map (task => Task(task)).join("")}`
  }

  eventHub.addEventListener("userLoggedIn", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)
    const completedTaskArray = newTasks.filter(task => task.isCompleted === true)
    notCompletedTaskRender(notCompletedTaskArray)
    completedTaskRender(completedTaskArray)
    initializeDialogButtonEvents()
  })
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML = ""
  })  
 
}



export default TaskList

