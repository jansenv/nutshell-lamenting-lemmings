// Authored by: Willy Metcalf
let messages = []

export const useMessages = () => messages.slice().reverse()

export const getMessages = () => fetch("http://localhost:3000/messages?_expand=user")
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
    }).then(getMessages)
  }

  export const editMessage = message =>{
    return fetch(`http://localhost:3000/messages/${message.id}`,
    {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
  }).then(getMessages)
}
export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:3000/messages/${messageId}`, {
      method: "DELETE"
  })
  .then(getMessages)
}
