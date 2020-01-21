import { useFriends } from "./FriendsDataProvider.js"
import { Friend } from "./Friend.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"

// Authored by: Willy Metcalf


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends")


export const FriendList=()=>{

 

const friendsArray = useFriends()

// const usersFriendsArray = friendsArray.filter(user=> user.activeUserId === parseInt(sessionStorage.getItem("activeUser")))
// console.log("usersfriends", usersFriendsArray)

  const render = (friends)=>{
    contentTarget.innerHTML = `
    <h2 id="friendsTitle">Friends List!</h2>
    <div class="friendBox">
    <input placeholder="Search" type="text" class="friendSearch" />
   
    ${friends.map(fri=>Friend(fri)).join("")}
    </div>
    `
  }
  eventHub.addEventListener("userLoggedIn", e => {
    let usersFriendsArray = friendsArray.filter(user=> user.activeUserId === parseInt(sessionStorage.getItem("activeUser")))

    render(usersFriendsArray)
    initializeDialogButtonEvents()
 
  }) 
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML=""
  }) 
  eventHub.addEventListener("newFriendAdded", e => {
    const friendsArray = useFriends()
    let usersFriendsArray = friendsArray.filter(user=> user.activeUserId === parseInt(sessionStorage.getItem("activeUser")))
    render(usersFriendsArray)
  }) 
  eventHub.addEventListener("friendRemoved", e => {
    const friendsArray = useFriends()
    let usersFriendsArray = friendsArray.filter(user=> user.activeUserId === parseInt(sessionStorage.getItem("activeUser")))
    render(usersFriendsArray)
  }) 
}