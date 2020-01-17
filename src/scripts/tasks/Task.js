// Coded by Spencer Truett

const Checkbox=(task)=>{
  if(task.isCompleted===true){
     return `
  <input type="checkbox" name="completedCheckbox" value="${task.isCompleted}" class="isCompletedCheckbox" id="taskCompleted--${task.id}" checked>Completed?<br>
  `
  }
else{
 return `
  <input type="checkbox" name="completedCheckbox" value="${task.isCompleted}" class="isCompletedCheckbox" id="taskCompleted--${task.id}">Completed?<br></br>
  `
  }
 
  
}
export const Task = (task) => {
  return `
  <section>
  <div class="taskFields">
    <h3>Task: ${task.name}</h3>
    <div>Task Description: ${task.task}</div>
    <div>Expected Completion Date: ${task.dueDate}</div>
  </div>
  <div>
  ${Checkbox(task)}
    
    <input type="hidden" class="taskCheckbox" id="taskId--${task.id}"  value="${task.id}"/>
  </div>

  <div id="edit--${task.userId}">
    <button class="button--edit" id="editTask--${task.id}">Edit</button>
    <button class="button--delete" id="deleteTask--${task.id}">Delete</button>
  </div>
  </section>`
}