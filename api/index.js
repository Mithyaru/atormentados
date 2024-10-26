const express = require('express')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 4000

const app = express()

app.use(cors())


app.listen(port, () => console.log('server is running on ' + port))