let messages = []

export const useMessages = () => messages.slice()

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
    })
  }

  export const editMessage = message =>{
    return fetch(`http://localhost:3000/messages/${message.id}`,
    {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
  })
}
export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:3000/messages/${messageId}`, {
      method: "DELETE"
  })
  .then(getMessages)
}
