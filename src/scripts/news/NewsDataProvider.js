// Authored by: Jansen van der Spuy

let news = []

export const useNews = () => news.slice().reverse()

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

export const deleteNews = articleId => {
    return fetch(`http://localhost:3000/news/${articleId}`, {
        method: "DELETE"
    })
    .then(getNews)
}

export const editNews = (article) => {
    return fetch(`http://localhost:3000/news/${article.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getNews)
}