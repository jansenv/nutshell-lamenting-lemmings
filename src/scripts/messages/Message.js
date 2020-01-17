export const Message = (message) => {
  return `
  <section>
  <button id="button--${message.id}" class="userButtonToLink">${message.user.firstName} ${message.user.lastName}</button>
  <dialog class="dialog--addMessage">
  Would you like to add ${message.user.firstName} ${message.user.lastName} as your friend?
  <button class="save--friend">Yes</button>
  <button class="button--close">No</button>
  </dialog>
  <div>${message.message}</div>
  <div id="edit--${message.userId}">
    <button class="button--edit" id="editMessage--${message.id}">Edit</button>
    <button class="button--delete" id="deleteMessage--${message.id}">Delete</button>
  </div>
  </div>
  </section>`
}