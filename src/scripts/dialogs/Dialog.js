// Authored by: Holden
const eventHub = document.querySelector(".container")

const initializeDialogButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
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
              theDialog.showModal()
          }
      )
  }

  eventHub.addEventListener("editEventButtonClicked", e => {
    const dialogSelector = document.querySelector(".dialog--addEvent")
    dialogSelector.showModal()
  })
  
}

export default initializeDialogButtonEvents