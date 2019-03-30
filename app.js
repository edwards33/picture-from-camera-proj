const express = require('express')
const port = 3000
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}! Go to http://localhost:${port}/`)
})