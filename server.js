const express = require('express')
const app = new express()

app.get('/', (req, res) => {
    res.send('Hello dude')
})

app.get('/api/users', (req, res) => {
    res.send(`<h1>Hellow dude, welcome to API</h1>`)
})

app.get('/api/users/:id', (req, res) => {
    if(req.params.id === null) {
        console.log(`I can't do it your command :(`)
    }
    res.send(req.params.id)
})
app.listen(3000, () => {
    console.log('Listening on port 3000')
})

function errView() {
    alert('Error')
}