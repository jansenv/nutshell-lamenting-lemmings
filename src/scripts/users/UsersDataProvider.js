let users = []

export const useUsers = () => users.slice()

export const getUsers = () => fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(parsedUsers => users = parsedUsers)