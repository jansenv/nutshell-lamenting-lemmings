// Authored by: Willy Metcalf

import { useUsers } from "../users/UsersDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".home")
const contentElement = document.querySelector(".navigation")


export const Home =()=>{
  eventHub.addEventListener("click", clickEvent=>{
    if(clickEvent.target.id === "logOut"){

      sessionStorage.removeItem("activeUser")
      console.log("activeUser", sessionStorage.getItem("activeUser"))
      eventHub.dispatchEvent(new CustomEvent("userLoggedOut"))
      contentTarget.innerHTML=""
      contentElement.innerHTML=""
    }
  })
  const render = (user)=>{
    contentTarget.innerHTML = `
    <a href="#" class="logOut" id="logOut">Log Out</a>
    <p class="welcomeMessage">HELLO ${user.firstName} ${user.lastName}!</p>
    `

    contentElement.innerHTML = `
    <div>Jump to:</div>
    <a href="#news" class="NETnav" id="newsJump">News</a>
    <a href="#events" class="NETnav" id="eventsJump">Events</a>
    <a href="#tasks" class="NETnav" id="tasksJump">Your Tasks</a>
    `
  }

  eventHub.addEventListener("userLoggedIn", e => {
    const users = useUsers()
    const user = users.find(ass=>ass.id === parseInt(sessionStorage.getItem("activeUser"),10))
    render(user)
  })  
 
  

}
