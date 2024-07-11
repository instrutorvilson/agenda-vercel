const express = require('express')

app.get('/ola',(req, res)=>{
  res.status(200).send('Ola')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})