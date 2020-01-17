// Authored by: Jansen van der Spuy

export const NewsArticle = (newsArticle) => {
    return `
    <h2><a href="${newsArticle.url}">${newsArticle.title}</a></h2>
    <h3>${newsArticle.synopsis}</h3>
    <div>Submitted by ${newsArticle.user.firstName} ${newsArticle.user.lastName} at ${newsArticle.timestamp}</div>
    <button class="button--edit" id="editNewsArticle--${newsArticle.id}">Edit</button>
    <button class="button--delete" id="deleteNewsArticle--${newsArticle.id}">Delete</button>
    `
  }