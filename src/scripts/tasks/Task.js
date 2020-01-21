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

  const timeFormat = (dateTimePicked) => {
    const [date, militaryTime] = dateTimePicked.split("T")
    let [hours, minutes] = militaryTime.split(":")
    if (hours >= 13) {
      return `${(hours - 12)}:${minutes} PM`
    } else if (hours === '12') {
      return `${hours}:${minutes} PM`
    } else if (hours < 12 && hours > 9) {
      return `${hours}:${minutes} AM`
    } else if (hours <= 9 && hours > 0) {
      const [zero, currentHour] = hours.split("")
      return `${currentHour}:${minutes} AM`
    } else if (hours === '00') {
      return `${hours = 12}:${minutes} AM`
    }
  }

  return `
  <section class="taskCSS">
  <div class="taskFields">
    <h3>Task: ${task.name}</h3>
    <div>Task Description: ${task.task}</div>
    <div>Expected Completion Date: ${new Date(task.dueDate).toLocaleDateString('en-US') + " " + timeFormat(task.dueDate)}</div>
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