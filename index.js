const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());

const courseCategories = require('./data/coursesCategory.json')

app.get('/', (req, res) => {
  res.send('Skill share server is running')
})
app.get('/course-categories', (req, res) => {
  res.send(courseCategories)
})

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
})