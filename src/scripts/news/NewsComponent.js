// Authored by: Jansen van der Spuy

export const NewsArticle = (newsArticle) => {

  const editDeleteButton = () => {
    let button = ""
    if(newsArticle.userId === parseInt(sessionStorage.getItem("activeUser")))
    {
      button = `<div id="edit--${newsArticle.userId}">
      <button class="button--edit" id="editNewsArticle--${newsArticle.id}">Edit</button>
      <button class="button--delete" id="deleteNewsArticle--${newsArticle.id}">Delete</button>
    </div>`
    }
    return button

  }
    return `
    <h2><a href="http://${newsArticle.url}">${newsArticle.title}</a></h2>
    <h3>${newsArticle.synopsis}</h3>
    <div>Submitted by ${newsArticle.user.firstName} ${newsArticle.user.lastName}</div>
    ${editDeleteButton()}
    `
  }

  // new Date(newsArticle.timestamp).toLocaleDateString('en-US')