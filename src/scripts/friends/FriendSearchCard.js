import { useFriends } from "./FriendsDataProvider.js  "

// Authored by: Willy Metcalf


export const SearchFriend=(user)=>{
  const friendRelation = useFriends()
let selectedFriend = ""

const usersFriend = friendRelation.filter(currentUser=>{
  if(currentUser.userId === user.id && currentUser.activeUserId === parseInt(sessionStorage.getItem("activeUser"),10))
  {
    selectedFriend = true
    return true
  }
})
let searchParameter = document.querySelector(".friendSearch").value

  if(selectedFriend !== true){
    return `
    <div class="friendCard"id="${user.id}">${user.firstName} ${user.lastName}  </div>
    <button class="searchAddUser" id="searchAddFriend--${user.id}">Add Friend</button>
    
    `
  }



}