// Authored by: Willy Metcalf

import { saveMessage, getMessages, useMessages, editMessage } from "./MessagesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addMessageButton")


export const AddMessageForm = () => {

  eventHub.addEventListener("click", e => {
      if (e.target.id === "saveMessageButton") {

        const hiddenId = document.querySelector("#message-id").value
      if(hiddenId === ""){
        const newMessage = {
            userId: parseInt(sessionStorage.getItem("activeUser"),10),
            message: document.querySelector("#messageText").value,
            timestamp: Date.now()
        }
        saveMessage(newMessage).then(() => {
            const message = new CustomEvent("newMessageSaved")
            eventHub.dispatchEvent(message)
        })
      }else{
        const editedMessage = {
          id:hiddenId,
          userId: parseInt(sessionStorage.getItem("activeUser"),10),
          message: document.querySelector("#messageText").value,
          timestamp: parseInt(document.querySelector("#hiddenTimestamp").value,10)
        }
        editMessage(editedMessage).then(()=>{
          eventHub.dispatchEvent(new CustomEvent("messageHasBeenEdited"))
        })
      }
    
      const resetMessageForm = () => {
          document.querySelector("#messageText").value = ""
          
      }
      resetMessageForm()
      const dialogElement = e.target.parentNode
      dialogElement.close()
  }
  if(e.target.id.startsWith("editMessage--")){
    const [prefix, id] = e.target.id.split("--")
    const messages = useMessages()

    const theFoundMessage = messages.find(selectedMessage => selectedMessage.id === parseInt(id,10))

    document.getElementById("message-id").value = theFoundMessage.id
      document.getElementById("messageText").value = theFoundMessage.message
    document.getElementById("hiddenTimestamp").value = theFoundMessage.timestamp
    eventHub.dispatchEvent(new CustomEvent("editMessageButtonClicked"))

  }
})



  const render = () => {
  contentTarget.innerHTML =   
    `<div class="addMessage">
        <button id="button--addMessage">Add Message</button>
        
        <dialog class="dialog--addMessage">
        <input type="hidden" id="message-id"/>
        <input type="hidden" id="hiddenTimestamp" />
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
  eventHub.addEventListener("userLoggedIn", e => {
    render()
  }) 
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML=""
  }) 
}