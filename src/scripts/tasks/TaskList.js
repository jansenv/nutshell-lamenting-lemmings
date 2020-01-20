// Coded by Spencer Truett

import { useTasks, deleteTask } from "./TaskDataProvider.js"
import { Task } from "./Task.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasksToDo")
const contentTargetCompletedTasks = document.querySelector(".tasksCompleted")

const TaskList = () => {
  const tasks = useTasks()

  eventHub.addEventListener("taskHasBeenEdited", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)

      const yourNotCompletedTaskArray = notCompletedTaskArray.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser"), 10))

    const completedTaskArray = newTasks.filter(task => task.isCompleted === true)

      const yourCompletedTaskArray = completedTaskArray.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser"), 10))

    notCompletedTaskRender(yourNotCompletedTaskArray)
    completedTaskRender(yourCompletedTaskArray)
    initializeDialogButtonEvents()
  })
  
  eventHub.addEventListener("newTaskSaved", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)

    const yourNotCompletedTaskArray = notCompletedTaskArray.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser"), 10))
    notCompletedTaskRender(yourNotCompletedTaskArray)
    initializeDialogButtonEvents()
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteTask--")) {
      const [prefix, id] = e.target.id.split("--")
      deleteTask(id).then(() => render(useTasks()))
    }
  })




  const completedTaskRender = (taskArray) => {
    contentTargetCompletedTasks.innerHTML = `<h2>CompletedTasks</h2> ${taskArray.map (task => Task(task)).join("")}`
  }


  const notCompletedTaskRender = (taskArray) => {
    contentTarget.innerHTML = `<h2>To Do List:</h2> ${taskArray.map (task => Task(task)).join("")}`
  }

  eventHub.addEventListener("userLoggedIn", e => {
    const newTasks = useTasks()
    const notCompletedTaskArray = newTasks.filter(task => task.isCompleted === false)

      const yourNotCompletedTaskArray = notCompletedTaskArray.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser"), 10))

    const completedTaskArray = newTasks.filter(task => task.isCompleted === true)

      const yourCompletedTaskArray = completedTaskArray.filter(task => task.userId === parseInt(sessionStorage.getItem("activeUser"), 10))

    notCompletedTaskRender(yourNotCompletedTaskArray)
    completedTaskRender(yourCompletedTaskArray)
    initializeDialogButtonEvents()
  })
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML = ""
    contentTargetCompletedTasks.innerHTML = ""
  })  
 
}



export default TaskList

