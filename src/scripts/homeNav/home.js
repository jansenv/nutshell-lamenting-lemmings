import { useUsers } from "../users/UsersDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".home")


export const Home =()=>{
  eventHub.addEventListener("click", clickEvent=>{
    if(clickEvent.target.id === "logOut"){

      sessionStorage.removeItem("activeUser")
      console.log("activeUser", sessionStorage.getItem("activeUser"))
      eventHub.dispatchEvent(new CustomEvent("userLoggedOut"))
      contentTarget.innerHTML=""
    }
  })
  const render = (user)=>{
    contentTarget.innerHTML = `
    HELLO ${user.firstName} ${user.lastName}!
  <a href="#" class="logOut" id="logOut">Log Out</a>
    `
  }

  eventHub.addEventListener("userLoggedIn", e => {
    const users = useUsers()
    const user = users.find(ass=>ass.id === parseInt(sessionStorage.getItem("activeUser"),10))
    render(user)
  })  
 
  

}
