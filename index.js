const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());


app.get('/', (req, res) => {
  res.send('Skill share server is running')
})

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
})