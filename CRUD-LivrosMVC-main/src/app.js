const express = require('express')
const app = express()

const livroRoute = require("./routes/livroRoute")

app.get("/", (request, response) => {
    response.send("Olá livro.")
})

app.use(express.json())

app.use("/",livroRoute)

module.exports = app