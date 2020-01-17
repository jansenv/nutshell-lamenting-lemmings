export const Message = (message) => {
  const userNameButton=()=>{
    if(message.id === parseInt(sessionStorage.getItem("activeUser"),10)){
      return `
      <button id="button--${message.id}" class="userButtonToLink">${message.user.firstName} ${message.user.lastName}</button>
      <dialog class="dialog--addMessage">
        <input type="hidden" id="messageId" value="${message.id}" />
        Would you like to add ${message.user.firstName} ${message.user.lastName} as your friend?
        <button id="addFriend">Yes</button>
        <button class="button--close">No</button>
      </dialog>
      `
    }else{
      return `<div>${message.user.firstName} ${message.user.lastName}</div>`
    }
  }
  return `
  <section>
  ${userNameButton()}
  <div>${message.message}</div>
  <div id="edit--${message.userId}">
    <button class="button--edit" id="editMessage--${message.id}">Edit</button>
    <button class="button--delete" id="deleteMessage--${message.id}">Delete</button>
  </div>
  </div>
  </section>`
}