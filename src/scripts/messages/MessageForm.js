import { saveMessage, getMessages } from "./MessagesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addMessageButton")


export const AddMessageForm = () => {

  eventHub.addEventListener("click", e => {
      if (e.target.id === "saveMessageButton") {
      // Make a new object representation of a note
      const newMessage = {
          userId: sessionStorage.getItem("activeUser"),
          message: document.querySelector("#messageText").value,
          timestamp: Date.now()
      }
      saveMessage(newMessage).then(getMessages).then(() => {
          const message = new CustomEvent("newMessageSaved")
          eventHub.dispatchEvent(message)
      })
      const resetMessageForm = () => {
          document.querySelector("#messageText").value = ""
          
      }
      resetMessageForm()
      const dialogElement = e.target.parentNode
      dialogElement.close()
  }
})



  const render = () => {
  contentTarget.innerHTML =   
    `<div class="addMessage">
        <button id="button--addMessage">Add Message</button>
        
        <dialog class="dialog--addMessage">
        <input type="hidden" class="hiddenMessageId"/>
        <label class="dialogTitles">Add a New Message!</label>
        <button class="button--close">X</button>
        <hr>
            <div>
              <label for="messageNameText">Message:</label>
              <input id="messageText" type="text" />
              <br>

            </div>
            <button class="button--save" id="saveMessageButton">Save</button>         
        </dialog>
    </div>`
  }
  render()
}