// Authored by: Willy Metcalf

export const Friend=(friend)=>{
  return `
  <div class="friendCard">${friend.user.firstName} ${friend.user.lastName}
  <button class="deleteFriend--${friend.id}" id="deleteFriend--${friend.user.id}">Remove Friend</button>
  </div>
  `

}