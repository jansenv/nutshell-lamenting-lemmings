// Authored by: Willy Metcalf

import { useMessages, deleteMessage } from "./MessagesDataProvider.js"
import { Message } from "./Message.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"





const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".chat")



export const MessageList=()=>{
    const messages = useMessages()
    
  eventHub.addEventListener("newMessageSaved",e=>{
    const newMessages = useMessages()
    render(newMessages)
  })
  eventHub.addEventListener("messageHasBeenEdited",e=>{
    const newMessages = useMessages()
    render(newMessages)
  })
  
    eventHub.addEventListener("click", e => {
      if (e.target.id.startsWith("deleteMessage--")) {
        const [prefix, id] = e.target.id.split("--")
        const Id = parseInt(id, 10)
        deleteMessage(Id).then(() => render(useMessages()))
      }
    })
  
    const render = (mes) => {
      contentTarget.innerHTML = 
      mes.map(message => Message(message)).join("")
    }
    eventHub.addEventListener("userLoggedIn", e => {
      const newMessages = useMessages()
      render(newMessages)
    }) 
    eventHub.addEventListener("userLoggedOut", e => {
      contentTarget.innerHTML=""
    }) 
    eventHub.addEventListener("friendRemoved", e => {
      const newMessages = useMessages()
      render(newMessages)
      initializeDialogButtonEvents()
    }) 
    eventHub.addEventListener("newFriendAdded", e => {
      const newMessages = useMessages()
      render(newMessages)
      initializeDialogButtonEvents()

    }) 


}