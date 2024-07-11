const express = require('express')
const app = express()

app.get('/ola',(req, res)=>{
  res.status(200).send('Ola')
})

app.get('/hello',(req, res)=>{
  res.status(200).send('hello')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})