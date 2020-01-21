
import { SearchFriend } from "./FriendSearchCard.js"
import { useUsers } from "../users/UsersDataProvider.js"
import initializeDialogButtonEvents from "../dialogs/Dialog.js"

// Authored by: Willy Metcalf
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendSearchResults")

export const SearchFriendsList=()=>{

  eventHub.addEventListener("keypress", e=>{
    if(e.target.classList.contains("friendSearch")){
      if(e.key === "Enter"){
        const users = useUsers()
        const filteredUsers = []

        users.filter(us=>{
          Object.values(us).map(ass=>{
            if(String(ass).toLowerCase().includes(e.target.value.toLowerCase())){

              filteredUsers.push(us)
            }
          })
          
        })    
        const reducedUsers = [...new Set(filteredUsers)]
        reducedUsers.filter((item,index)=> reducedUsers.indexOf(item)===index)
        reducedUsers.reduce((unique,item)=> unique.includes(item) ? unique:[...unique,item],[])
        console.log(reducedUsers)
        reducedUsers.filter((thing)=>{
          const users = useUsers()
    const user = users.find(ass=>ass.id === parseInt(sessionStorage.getItem("activeUser"),10))
          if(thing.userId === user.Id){
            console.log(user)
            return false
          }
        })
        contentTarget.innerHTML = `<label>Search Results:</label>
        <button class="button--close">X</button><hr>
        
        ${reducedUsers.map(ass=>SearchFriend(ass)).join("")}
        `
        contentTarget.show()
        initializeDialogButtonEvents()
      }
    }
  })
}

// 
  
