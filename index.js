const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/data', function(req, res) {
  res.send('<h1>Hello hpp!</h1>')
})

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})



