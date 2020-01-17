// Authored by: Jansen van der Spuy

import { saveNews, getNews, editNews, useNews } from "./NewsDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".addNewsButton")

export const resetNewsForm = () => {
    document.querySelector("#articleTitle").value = ""
    document.querySelector("#articleURL").value = ""
    document.querySelector("#articleSynopsis").value = ""
}
export const AddNewsForm = () => {


    eventHub.addEventListener("click", e => {
        if (e.target.id === "saveArticleButton") {
            const hiddenInputValue = document.querySelector("#news-id").value

            if (hiddenInputValue !== "") {
                const editedNews = {
                    id: parseInt(document.querySelector("#news-id").value, 10),
                    userId: parseInt(sessionStorage.getItem("activeUser"), 10),
                    title: document.querySelector("#articleTitle").value,
                    url: document.querySelector("#articleURL").value,
                    synopsis: document.querySelector("#articleSynopsis").value,
                    timestamp: Date.now()
                }

                editNews(editedNews).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("newsHasBeenEdited"))
                })
                resetNewsForm()

                document.querySelector("#news-id").value = ""
            
            } else {

                const newArticle = {
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#articleTitle").value,
                    url: document.querySelector("#articleURL").value,
                    synopsis: document.querySelector("#articleSynopsis").value,
                    timestamp: Date.now()
                }

                
                saveNews(newArticle).then(getNews).then(() => {
                    const message = new CustomEvent("newArticleSaved")
                    eventHub.dispatchEvent(message)
                })

                resetNewsForm()
            }
        }
    })

    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("editNewsArticle--")) {
            const [prefix, id] = e.target.id.split("--")

            const allNews = useNews()

            const theFoundNews = allNews.find(
                (eventObj) => {
                    return eventObj.id === parseInt(id, 10)
                }
            )

            document.getElementById("news-id").value = theFoundNews.id
            document.getElementById("articleTitle").value = theFoundNews.title
            document.getElementById("articleURL").value = theFoundNews.url
            document.getElementById("articleSynopsis").value = theFoundNews.synopsis

            const message = new CustomEvent("editNewsButtonClicked")
            eventHub.dispatchEvent(message)
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
                <input type="hidden" id="news-id" />
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
            <button class="button--save button--close" id="saveArticleButton">Save</button>         
            </dialog>
        </div>`
    }

    render()
}