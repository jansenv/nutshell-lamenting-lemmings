import { resetNewsForm } from "../news/NewsForm.js"
import { resetEventForm } from "../events/EventForm.js"

// Authored by: Holden Parker
const eventHub = document.querySelector(".container")

const initializeDialogButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
        // resetNewsForm()
      }    
    )
  }

  const allDialogButtons = document.querySelectorAll("button[id^='button--']")

  for (const btn of allDialogButtons) {
    
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              resetEventForm()
              theDialog.showModal()
          }
      )
  }

  eventHub.addEventListener("editEventButtonClicked", e => {
    const dialogSelector = document.querySelector(".dialog--addEvent")
    dialogSelector.showModal()
  })

  eventHub.addEventListener("editNewsButtonClicked", e => {
    const dialogSelector = document.querySelector(".dialog--addArticle")
    dialogSelector.showModal()
  })

  eventHub.addEventListener("editTaskButtonClicked", e => {
    const dialogSelector = document.querySelector(".dialog--addTask")
    dialogSelector.showModal()
  })
  eventHub.addEventListener("editMessageButtonClicked", e => {
    const dialogSelector = document.querySelector(".dialog--addMessage")
    dialogSelector.showModal()
  })
  
}

export default initializeDialogButtonEvents