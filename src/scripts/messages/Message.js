export const Message = (message) => {
  return `
  <section>
  <a href="#" class="UserMessageName">${message.user.firstName} ${message.user.lastName}</a>
  <div>${message.message}</div>
  <div id="edit--${message.userId}">
    <button class="button--edit" id="editMessage--${message.id}">Edit</button>
    <button class="button--delete" id="deleteMessage--${message.id}">Delete</button>
  </div>
  </div>
  </section>`
}