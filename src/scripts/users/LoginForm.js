import { useUsers, saveUser } from "./UsersDataProvider.js"

// Collective group coding until line 70 then it wsa willy
// no more runescape for holden
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login")

const hide = () => {
  const hiddenFields = document.querySelectorAll(".newUserForm")
  const logInButton = document.querySelector(".logIn")
  for (const field of hiddenFields) {
    field.classList.remove("hidden")

  }
  logInButton.classList.add("hidden")
}
const show = () => {
  const hiddenFields = document.querySelectorAll(".newUserForm")
  const logInButton = document.querySelector(".logIn")
  for (const field of hiddenFields) {
    field.classList.add("hidden")

  }

  logInButton.classList.remove("hidden")

}

export const LoginForm = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList.contains("CreateNewUserLink")) {
      hide()
    }
    if (clickEvent.target.classList.contains("logInLink")) {
      show()
    }

  })




  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.classList.contains("logIn")) {
      const users = useUsers()
      const userEmail = document.querySelector(".email").value
      const userPassword = document.querySelector(".password").value
      if (userEmail === "") {
        window.alert("Please enter your Email address")
      }
      if (userPassword === "") {
        window.alert("Please enter your password")
      }
      else {
        try {
          const foundUser = users.find(singleUser => {
            if (singleUser.email === userEmail && singleUser.password === userPassword) {
              return singleUser
            }
          })
          sessionStorage.setItem("activeUser", foundUser.id)
          console.log(sessionStorage.getItem("activeUser"))
          contentTarget.innerHTML =""
        }
        catch{
          window.alert("Your email or password is incorrect")

        }


      }
    }
  })



eventHub.addEventListener("click", clickEvent=>{
  if(clickEvent.target.classList.contains("save--user")){
    const users = useUsers()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmPassword").value
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
 const newUserId= users.length + 1
    if(email === "" || password ==="" || firstName==="" || lastName===""){
      window.alert("Please Fill out all Input Fields")
    }else if(password !== confirmPassword){
      window.alert("Your Passwords Don't Match")
    }else{
       const newUser = {
         "id": newUserId,
      "email": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName
    }
    saveUser(newUser).then(()=> contentTarget.innerHTML ="").then(()=>{

      sessionStorage.setItem("activeUser", newUser.id)
console.log(sessionStorage.getItem("activeUser"))    
})
    }
  }
})







  const render = () => {
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
        Email: <input class="email" id="email" type="text" /><br>
        Password: <input class="password" id ="password" type="text" autocomplete="off" />
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