const express = require('express')
const router = express.Router()
const port = 3075
const port2 = 3100
const app = express()
const add = (a,b) => {
  console.log(a+a, b+b)
}
app.set('view engine','hbs')
app.get('/', (req,res) => {
  res.render('index', {
    pageBody: add(213,543)
  })
})
app.listen(port)
const substraction = (c,d) => {
  console.log(a-20, b-50)
}
router.get('/', (req,res) => {
  res.render('index',{
  }) 
})
app.listen(port2)