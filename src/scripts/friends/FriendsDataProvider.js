// Authored by: Willy Metcalf

let friends = []

export const useFriends = () => friends.slice()

export const getFriends = () => fetch("http://localhost:3000/friends?_expand=user")
    .then(res => res.json())
    .then(parsedFriends => friends = parsedFriends)



    export const saveFriend = friend =>{
        return fetch('http://localhost:3000/friends',
    
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(friend)
      }).then(getFriends)
    }
    export const deleteFriend = (friendRelationship) => {
        return fetch(`http://localhost:3000/friends/${friendRelationship.id}`, {
            method: "DELETE"
        })
        .then(getFriends)
      }