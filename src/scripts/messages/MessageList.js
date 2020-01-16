import { useMessages, deleteMessage } from "./MessagesDataProvider.js"
import { Message } from "./Message.js"



const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".chat")



export const MessageList=()=>{
    const messages = useMessages()
    
  
  
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
    render(messages)


}