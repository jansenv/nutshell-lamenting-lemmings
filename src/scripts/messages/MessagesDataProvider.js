let messages = []

export const usemessages = () => messages.slice()

export const getmessages = () => fetch("http://localhost:3000/messages?_expand=users")
    .then(res => res.json())
    .then(parsedmessages => messages = parsedmessages)


    export const saveMessage = message =>{
      return fetch('http://localhost:3000/messages',
  
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
  }
