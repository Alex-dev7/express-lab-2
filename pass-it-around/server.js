require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT 


app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>')

})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})