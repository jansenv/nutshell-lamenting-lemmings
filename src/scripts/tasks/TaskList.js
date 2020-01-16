// Coded by Spencer Truett

import { useTasks } from "./TaskDataProvider.js"




const contentTarget = document.querySelector(".tasks")
const eventHub = document.querySelector(".container")

const TaskListComponent = () => {

    eventHub.addEventListener("noteHasBeenEdited", event => {
        const updatedTasks = useTasks()
        render(updatedTasks)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editTask--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    taskId: taskId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteTask--")) {
            const [deletePrefix, taskId] = clickEvent.target.id.split("--")

            deleteNote(taskId).then(
                () => {
                    const theNewTasks = useTasks()
                    render(theNewTasks)
                }
            )
        }
    })

    const renderTasksAgain = () => {
        const allTheTasks = useTasks()
        render(allTheTasks)

    }

    eventHub.addEventListener("taskCreated", event => {
        renderTasksAgain()
    })

    eventHub.addEventListener("showNoteButtonClicked", event => {
        renderTasksAgain()
    })

    const render = (tasksCollection) => {
        contentTarget.innerHTML = tasksCollection.map(
            (individualTask) => {
                return `
                    <section class="note">
                        <div>${individualTask.name}</div>
                        <div>${individualTask.task}</div>
                        <button id="deleteNote--${individualTask.id}">Delete</button>
                        <button id="editNote--${individualTask.id}">Edit</button>
                    </section>
                `
            }
        ).join("")
    }

}

export default TaskListComponent