export const Message = (message) => {
  return `
  <section>
  <h3>${message.user.firstName} ${message.user.lastName}</h3>
  <div>${message.message}</div>
  <div id="edit--${message.userId}">
    <button class="button--edit" id="editMessage--${message.id}">Edit</button>
    <button class="button--delete" id="deleteMessage--${message.id}">Delete</button>
  </div>
  </div>
  </section>`
}