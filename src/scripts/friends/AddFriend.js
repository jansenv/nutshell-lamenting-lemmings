import { saveFriend } from "./FriendsDataProvider.js"

const eventHub = document.querySelector(".container")

export const addFriend=()=>{
  eventHub.addEventListener("click", clickEvent=>{
  if(clickEvent.target.id.startsWith("addFriend")){
    let userId = document.querySelector("#messageId").value
    const newFriendRelation ={
      "userId": parseInt(userId,10),
      "activeUserId":parseInt(sessionStorage.getItem("activeUser"),10)
    }
    saveFriend(newFriendRelation)
  }
})
}
