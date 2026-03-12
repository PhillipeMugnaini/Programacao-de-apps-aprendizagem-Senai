let users = []
let posts = []

async function fetchData() {

    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')

    users = await userData.json()
    posts = await postsData.json()

    users.forEach(user => {
        user.posts = posts.filter(post => post.userId === user.id)
    })

    users.forEach(user => {
        console.log("\n================================")
        console.log("Nome:", user.name)
        console.log("Username:", user.username)
        console.log("Email:", user.email)
        console.log("Cidade:", user.address.city)
        console.log("Empresa:", user.company.name)

        console.log("\nPOSTS:")

        user.posts.forEach(post => {
            console.log("----")
            console.log("Título:", post.title)
            console.log("Conteúdo:", post.body)
        })
    })
}

fetchData()