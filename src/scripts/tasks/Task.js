export const Task = (task) => {
  return `
  <section>
  <div class="taskFields">
    <h3>Task: ${task.name}</h3>
    <div>Task Description: ${task.task}</div>
    <div>Expected Completion Date: ${task.dueDate}</div>
  </div>
  <div class="taskCheckbox">
    <input type="checkbox" name="cmpletedCheckbox" value="Completed">Completed?<br>
  </div>

  <button class="button--edit" id="editTask--${task.id}">Edit</button>
  <button class="button--delete" id="deleteTask--${task.id}">Delete</button>
  </section>`
}