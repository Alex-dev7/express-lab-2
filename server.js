const express = require('express')

const app = express()

const PORT = 3000;

//Greeting express application
app.get('/greeting/:name', (request, response) => {
    response.send(`What's up, ${request.params.name} !`)
})

//Tip Calculator express application
app.get('/tip/:total/:tipPercentage', (request, response) => {
    let tip = parseInt(request.params.total) *( parseInt(request.params.tipPercentage) / 100)
    response.send(`${tip}`)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})