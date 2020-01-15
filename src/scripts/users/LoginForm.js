import { useUsers } from "./UsersDataProvider.js"

// Collective group coding
// no more runescape for holden
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login")

const hide=()=>{
  const hiddenFields = document.querySelectorAll(".newUserForm")
  const logInButton = document.querySelector(".logIn")
  for (const field of hiddenFields) {
    field.classList.remove("hidden")
    
  }
  logInButton.classList.add("hidden")
}
const show=()=>{
  const hiddenFields = document.querySelectorAll(".newUserForm")
  const logInButton = document.querySelector(".logIn")
  for (const field of hiddenFields) {
    field.classList.add("hidden")
    
  }
  
  logInButton.classList.remove("hidden")

}

export const LoginForm =()=>{

  eventHub.addEventListener("click", clickEvent=>{
    if(clickEvent.target.classList.contains("CreateNewUserLink")){
      hide()
    }
    if(clickEvent.target.classList.contains("logInLink")){
      show()
    }
    
  })
const users = useUsers()
    console.log(users)


eventHub.addEventListener("click", clickEvent=>{
  if(clickEvent.target.classList.contains("logIn")){
    
    const userEmail = document.querySelector(".email").value
    const userPassword = document.querySelector(".password").value

    const foundUser =users.find(singleUser=>{
      return singleUser.email === userEmail
    })
sessionStorage.setItem("activeUser", foundUser.id)

}
})









  const render = ()=>{
    contentTarget.innerHTML = `
    <div>
      <a class="logInLink" href="#">Log In</a>  <a class="CreateNewUserLink" href="#">Create New User</a>
    </div>
    <div class = "FormContainer">
      <p class="welcome">Welcome!</p>
  
      <div class ="logInForm">
      <div class="hidden newUserForm">
        First Name: <input id="firstName" type="text" /> <br>
        Last Name: <input id="lastName" type="text" /> <br>
      </div>
        Email: <input class="email" type="text" required/><br>
        Password: <input class="password" id ="password" type="text" required/>
        <div class="hidden confirmPassword newUserForm">
        Confirm Password: <input id="confirmPassword" type="text" /><br>
        
        <button class="save--user">Save New User</button>
        </div>
        <br>
        <button class="logIn"> Log In</button>
      </div>
    </div>
    `
  }
  render()
}