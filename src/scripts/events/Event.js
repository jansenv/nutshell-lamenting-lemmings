export const Event = (event) => {
  return `
  <section>
  <h3>Event: ${event.name}</h3>
  <div>When: ${event.timestamp}</div>
  <div>Location: ${event.location}</div>
  <div>Posted by: ${event.user.firstName} ${event.user.lastName}</div>
  <button class="button--edit" id="editEvent--${event.id}">Edit</button>
  <button class="button--delete" id="deleteEvent--${event.id}">Delete</button>
  </section>`
}