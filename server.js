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

//Magic 8 Ball
const arrResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (request, response) => {
    const random = arrResponse[Math.floor(Math.random() * arrResponse.length)]
     response.send(`${request.params.question}
     <h1>${random}</h1>
     `)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})