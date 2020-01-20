import { useFriends } from "../friends/FriendsDataProvider.js"

// Authored by: Jansen van der Spuy

export const NewsArticle = (newsArticle => {

  const FriendChecker = (friends) => {
    const foundFriends = friends.filter(relat => {
      if (relat.activeUserId === parseInt(sessionStorage.getItem("activeUser"))) {
        return relat
      }
    })

    let shouldIRender = false
    let createdByMe = false
    
    if (newsArticle.userId === parseInt(sessionStorage.getItem("activeUser"))) {
      shouldIRender = true
      createdByMe = true
    }

    foundFriends.forEach(element => {
      if (element.user.id === newsArticle.userId) {
        shouldIRender = true
      }
    });

    if (shouldIRender && createdByMe) {
      return `
      <section class="newsCard">
        <h2><a href="http://${newsArticle.url}">${newsArticle.title}</a></h2>
        <h3>${newsArticle.synopsis}</h3>
        <div>Submitted by ${newsArticle.user.firstName} ${newsArticle.user.lastName}</div>
        <button class="button--edit" id="editNewsArticle--${newsArticle.id}">Edit</button>
        <button class="button--delete" id="deleteNewsArticle--${newsArticle.id}">Delete</button>
      </section>`
    }

    if (shouldIRender) {
      return `
      <section class="newsCard otherUserNewsCard">
        <h2><a href="http://${newsArticle.url}">${newsArticle.title}</a></h2>
        <h3>${newsArticle.synopsis}</h3>
        <div>Submitted by ${newsArticle.user.firstName} ${newsArticle.user.lastName}</div>
      </section>`
    }

  }

  return FriendChecker(useFriends())

})