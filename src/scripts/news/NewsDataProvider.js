let news = []

export const useNews = () => news.slice()

export const deleteEvent = articleId => {
    return fetch(`http://localhost:3000/news/${articleId}`, {
        method: "DELETE"
    })
    .then(getNews)
}

export const getNews = () => fetch("http://localhost:3000/news?_expand=user")
.then(res => res.json())
.then(parsedNews => news = parsedNews)

export const saveNews = event => {
    return fetch('http://localhost:3000/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getNews)
}