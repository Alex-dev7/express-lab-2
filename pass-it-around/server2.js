require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT 


app.get('/', (request, response) => {
    response.send(`<h1>99 Bottles of beer on the wall</h1>
     <h2>
     <a href=${'/98'} >take one down, pass it around</a>
     </h2>`)
})

app.get('/:number_of_bottles', (request, response) => {
    let bottles = parseInt(request.params.number_of_bottles)
    let bottlesLeft = bottles - 1
    
    if(bottles > 0 ) {
         response.send(`<h1> ${bottles} Bottles of beer on the wall</h1> 
         <h2>
         <a href=${bottlesLeft} >take one down, pass it around</a>
         </h2>`)
    }
    else {
        response.send(`<h1>No more bottles on the wall!</h1>
         <h2>
        <a href=${'/'}>Start Over</a>
        </h2>`)
    }
   

})


//----------------------------------------------------------------
// Fibonacci
// checks if the number is a perfect square root >> returns boolean
function squareRoot(i) {
    let num = parseInt( Math.sqrt(i))
    return num * num === i
}
 
//checks if the number is fibonacci by passing the formula as a parameter for the sqareRoot function
function fibonacci(n) {

    if(squareRoot(5 * n * n + 4) || squareRoot(5 * n * n - 4)) {
        return(`<h1>Very good. It is Fibonacci.</h1>`)
    } else {
         return(`<h1>I can tell this is not a fibonacci number.</h1>`)
    }
}


app.get('/fibonacci/:num', (request, response) => {
    response.send(`${fibonacci(request.params.num)}`)

})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})