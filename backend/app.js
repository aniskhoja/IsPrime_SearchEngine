const express = require('express')
const app = express();
const cors = require('cors')
const home = require('./src/routes/home')
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use('/', home)

PORT = process.env.PORT

app.listen(PORT, (err) => {
  if(err) { console.log(err) }
  console.log("Connected to port " + PORT)
})


