// Authored by: Holden Parker
const eventHub = document.querySelector(".container")

export const Event = (event) => {

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

  const editDeleteButton = () => {
    let button = ""
    if(event.userId === parseInt(sessionStorage.getItem("activeUser")))
    {
      button = `<div id="edit--${event.userId}">
      <button class="button--edit" id="editEvent--${event.id}">Edit</button>
      <button class="button--delete" id="deleteEvent--${event.id}">Delete</button>
    </div>`
    }
    return button

  }
  
  return `
  <section>
  <h3>Event: ${event.name}</h3>
  <div>When: ${new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
  <div>Location: ${event.location}</div>
  <div>Posted by: ${event.user.firstName} ${event.user.lastName}</div>
  ${editDeleteButton()}
  </section>`
}
 
