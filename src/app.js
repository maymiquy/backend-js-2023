const express = require('express')
const router = require('./routes/api')

const app = express()

app.use(express.json())
app.use(router)

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})