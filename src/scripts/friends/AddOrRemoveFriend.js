// Authored by: Willy Metcalf

import { saveFriend, deleteFriend, useFriends } from "./FriendsDataProvider.js"

const eventHub = document.querySelector(".container")

export const addFriend=()=>{

eventHub.addEventListener("click", clickEvent=>{
  if(clickEvent.target.id.startsWith("searchAddFriend--")){
    let [blah, userId] = clickEvent.target.id.split("--")

    const newSearchFriendRelation ={
      "userId": parseInt(userId,10),
      "activeUserId":parseInt(sessionStorage.getItem("activeUser"),10)
    }
    saveFriend(newSearchFriendRelation).then(()=>{
      eventHub.dispatchEvent(new CustomEvent("newFriendAdded"))
    })
  }
})
  eventHub.addEventListener("click", clickEvent=>{
    // Add friend dialog when you click the users name in a message
    let [prefix , messageUserId] = clickEvent.target.id.split("--")
  if(clickEvent.target.id.startsWith(`addFriend--${messageUserId}`)){

    // let [foo, userId] = document.querySelector(`#messageId--${messageUserId}`).value.split("--")

    const newFriendRelation ={
      "userId": parseInt(messageUserId,10),
      "activeUserId":parseInt(sessionStorage.getItem("activeUser"),10)
    }
    saveFriend(newFriendRelation).then(()=>{
      eventHub.dispatchEvent(new CustomEvent("newFriendAdded"))
    })
  }
    if (clickEvent.target.id.startsWith("deleteFriend--")) {
      const [prefix, userId] = clickEvent.target.id.split("--")
      const userIdInt = parseInt(userId, 10)
      const friends = useFriends()
      const foundFriend = friends.find(friend=>{
        if(friend.userId === userIdInt && friend.activeUserId === parseInt(sessionStorage.getItem("activeUser"))){
          return true
        }
      })
      deleteFriend(foundFriend).then(()=>{
        eventHub.dispatchEvent(new CustomEvent("friendRemoved"))
      })
    }
  })




}

