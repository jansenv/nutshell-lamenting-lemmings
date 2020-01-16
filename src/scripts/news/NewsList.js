import { NewsArticle } from "./NewsComponent.js"
import { useNews } from "./NewsDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".news")

const NewsList = () => {
  const news = useNews()
  
eventHub.addEventListener("newArticleSaved", e => {
    render(useNews())
})

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteNewsArticle--")) {
        const [prefix, id] = e.target.id.split("--")
        (id).then(() => render(useNews()))
    }
})

  const render = (articles) => {
    contentTarget.innerHTML = `<h2>News</h2>`
    contentTarget.innerHTML += 
    articles.map(news => NewsArticle(news)).join("")
  }

  render(news)

}

export default NewsList