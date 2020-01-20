import { useFriends } from "../friends/FriendsDataProvider.js"

// Authored by: Willy Metcalf

export const Message = (message) => {


const messageEditbuttons=()=>{

    let button = ""
    if(message.userId === parseInt(sessionStorage.getItem("activeUser"),10))
    {
      button = `<div id="edit--${message.userId}">
      <button class="button--edit" id="editMessage--${message.id}">Edit</button>
      <button class="button--delete" id="deleteMessage--${message.id}">Delete</button>
    </div>`
    }
    return button

  }

  const friendRelation = useFriends()
let selectedFriend = ""

const usersFriend = friendRelation.filter(user=>{
  if(user.userId === message.userId && user.activeUserId === parseInt(sessionStorage.getItem("activeUser"),10))
  {
    selectedFriend = true
    return true
  }

})


  const userNameButton=()=>{
    //write conditional for if the person is already friends with user
    if(selectedFriend !== true){
      return `
      <button id="button--${message.id}" class="userButtonToLink">${message.user.firstName} ${message.user.lastName}</button>
      <dialog class="dialog--addFriend">
        <input type="hidden" id="messageId--${message.userId}" value="${message.userId}" />
        Would you like to ADD ${message.user.firstName} ${message.user.lastName} as your friend?
        <button id="addFriend--${message.userId}" class="button--close">Yes</button>
        <button class="button--close">No</button>
      </dialog>
      `
    }else{
      return `
      <button id="button--${message.id}" class="deleteFriend">${message.user.firstName} ${message.user.lastName}</button>
      <dialog class="dialog--deleteFriend">
        <input type="hidden" id="messageId--${message.userId}" value="${message.userId}" />
        Would you like to DELETE ${message.user.firstName} ${message.user.lastName} as your friend?
        <button id="deleteFriend--${message.user.id}" class="button--close">Yes</button>
        <button class="button--close">No</button>
      </dialog>
      `
    }
  }
  return `
  <section class="card">
  ${userNameButton()}
  <div>${message.message}</div>
  ${messageEditbuttons()}
  </div>
  </section>`
}