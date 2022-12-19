const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()

const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

// default route
app.get("/", (req, res) => {
    res.send(`Rapid talent server is running or port ${port}`)
})

app.listen(port, () => {
    console.log(`Rapid talent server is running on port ${port}`)
})