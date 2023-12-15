const express = require('express')
const router = require('./routes/api')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(router)

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})