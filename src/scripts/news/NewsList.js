import { NewsArticle } from "./NewsComponent.js"
import { useNews, deleteNews } from "./NewsDataProvider.js"
import { useTasks } from "../tasks/TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".news")

const NewsList = () => {
  const news = useNews()

  eventHub.addEventListener("newsHasBeenEdited", e => {
    render(useNews())
  })
  
  eventHub.addEventListener("newArticleSaved", e => {
    render(useNews())
  })
  
  eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteNewsArticle--")) {
      const [prefix, id] = e.target.id.split("--")
      deleteNews(id).then(() => render(useNews()))
    }
  })

  eventHub.addEventListener("userLoggedIn", e => {
    render(useNews())
  })

  eventHub.addEventListener("newFriendAdded", e => {
    render(useNews())
  })

  eventHub.addEventListener("friendRemoved", e => {
    render(useNews())
  })

  const render = (articles) => {
    contentTarget.innerHTML = `<h2>News</h2>`
    contentTarget.innerHTML += 
    articles.map(news => NewsArticle(news)).join("")
  }
  eventHub.addEventListener("userLoggedIn", e => {
    const news = useNews()
    render(news)
  }) 
  eventHub.addEventListener("userLoggedOut", e => {
    contentTarget.innerHTML=""
  })  
  // render(news)

}

export default NewsList