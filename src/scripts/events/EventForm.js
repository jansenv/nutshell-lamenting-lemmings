import { saveEvent, getEvents } from "./EventDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addEventButton")

export const AddEventForm = () => {

    eventHub.addEventListener("click", e => {
        if (e.target.id === "saveEventButton") {
        // Make a new object representation of a note
        const newEvent = {
            userId: sessionStorage.getItem("activeUser"),
            name: document.querySelector("#eventNameText").value,
            location: document.querySelector("#eventLocationText").value,
            timestamp: document.querySelector("#eventDate").value,
        }
        saveEvent(newEvent).then(getEvents).then(() => {
            const message = new CustomEvent("newEventSaved")
            eventHub.dispatchEvent(message)
        })
        const resetEventForm = () => {
            document.querySelector("#eventNameText").value = ""
            document.querySelector("#eventLocationText").value = ""
            document.querySelector("#eventDate").value = ""
        }
        resetEventForm()
        const dialogElement = e.target.parentNode
        dialogElement.close()
    }
})



    const render = () => {
    contentTarget.innerHTML =   
      `<div class="addEvent">
          <button id="button--addEvent">Add Event</button>

          <dialog class="dialog--addEvent">
          <label class="dialogTitles">Add a New Event!</label>
          <button class="button--close">X</button>
          <hr>
              <div>
                <label for="eventNameText">Name of Event:</label>
                <input id="eventNameText" type="text" />
                <br>
                <label for="eventLocationText">Event Location:</label>
                <input id="eventLocationText" type="text" />
                <br>
                <label for="eventDate">Event Date and Time:</label>
                <input type="datetime-local" id="eventDate">
                <br>
              </div>
              <button class="button--save" id="saveEventButton">Save</button>         
          </dialog>
      </div>`
    }
    render()
}