import { saveNews, getNews } from "./NewsDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addNewsButton")

export const AddNewsForm = () => {

    eventHub.addEventListener("click", e => {
        if (e.target.id === "saveArticleButton") {
        // Make a new object representation of an article
        const newArticle = {
            userId: sessionStorage.getItem("activeUser"),
            title: document.querySelector("#articleTitle").value,
            url: document.querySelector("#articleURL").value,
            synopsis: document.querySelector("#articleSynopsis").value,
            timestamp: Date.now(),
        }
        saveNews(newArticle).then(getNews).then(() => {
            const message = new CustomEvent("newArticleSaved")
            eventHub.dispatchEvent(message)
        })
        const resetArticleForm = () => {
            document.querySelector("#articleTitle").value = ""
            document.querySelector("#articleURL").value = ""
            document.querySelector("#articleSynopsis").value = ""
        }
        resetArticleForm()
        const dialogElement = e.target.parentNode
        dialogElement.close()
    }
})



    const render = () => {
    contentTarget.innerHTML =   
      `<div class="addArticle">
          <button id="button--addArticle">Add Article</button>

          <dialog class="dialog--addArticle">
          <label class="dialogTitles">Add a New Article!</label>
          <button class="button--close">X</button>
          <hr>
              <div>
                <label for="articleTitle">Title:</label>
                <input id="articleTitle" type="text" />
                <br>
                <label for="articleURL">URL:</label>
                <input id="articleURL" type="text" />
                <br>
                <label for="articleSynopsis">Description:</label>
                <input type="text" id="articleSynopsis">
                <br>
              </div>
              <button class="button--save" id="saveArticleButton">Save</button>         
          </dialog>
      </div>`
    }
    render()
}