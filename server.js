const express = require('express')

const app = express()

const PORT = 3000;


app.get('/greeting/:name', (request, response) => {
    response.send(`What's up, ${request.params.name} !`)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})