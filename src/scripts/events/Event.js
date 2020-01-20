// Authored by: Holden Parker
import { useFriends } from "../friends/FriendsDataProvider.js"

const eventHub = document.querySelector(".container")

export const Event = (event) => {

  const timeFormat = (dateTimePicked) => {
    const [date, militaryTime] = dateTimePicked.split("T")
    let [hours, minutes] = militaryTime.split(":")
    if (hours >= 13) {
      return `${(hours - 12)}:${minutes} PM`
    } else if (hours === '12') {
      return `${hours}:${minutes} PM`
    } else if (hours < 12 && hours > 9) {
      return `${hours}:${minutes} AM`
    } else if (hours <= 9 && hours > 0) {
      const [zero, currentHour] = hours.split("")
      return `${currentHour}:${minutes} AM`
    } else if (hours === '00') {
      return `${hours = 12}:${minutes} AM`
    }
  }

  const FriendChecker = (friends) => {
    const foundFriends = friends.filter(relat => {
      if (relat.activeUserId === parseInt(sessionStorage.getItem("activeUser"))) {
        return relat
      }
    })

    let shouldIRender = false
    let createdByMe = false

    if (event.userId === parseInt(sessionStorage.getItem("activeUser"))) {
      shouldIRender = true
      createdByMe = true
    }

    foundFriends.forEach(element => {
      if (element.user.id === event.userId) {
        shouldIRender = true
      }
    });

    if (shouldIRender && createdByMe) {
      return `<section class="eventCard">
          <h3>Event: ${event.name}</h3>
          <div>When: ${new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
          <div>Location: ${event.location}</div>
          <div>Posted by: ${event.user.firstName} ${event.user.lastName}</div>
          <div id="edit--${event.userId}">
          <button class="button--edit" id="editEvent--${event.id}">Edit</button>
          <button class="button--delete" id="deleteEvent--${event.id}">Delete</button>
          </div>
      </section>`
    }

    if (shouldIRender) {
      return `<section class="eventCard otherUsersEventCard">
          <h3>Event: ${event.name}</h3>
          <div>When: ${new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
          <div>Location: ${event.location}</div>
          <div>Posted by: ${event.user.firstName} ${event.user.lastName}</div>
      </section>`
    }
  }
  return FriendChecker(useFriends())
}

