// Coded by Spencer Truett

let tasks = []

export const useTasks = () => tasks.slice()

export const editTask = (task) => {
    return fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(getTasks)

}

export const deleteTask = (taskId) => {
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE"
    })
    .then(getTasks)
}

export const saveTask = task => {
    return fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}

export const getTasks = () => {
    return fetch("http://localhost:3000/tasks")
        .then(response => response.json())
        .then((taskArray) => {
            tasks = taskArray.slice()
        })
}

export const patchTask = (task) => {
    return fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(getTasks)

}