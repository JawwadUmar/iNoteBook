const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

//Availbale Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//Default expreess template->
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})