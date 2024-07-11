const express = require('express')
const app = express()
const pg = require('pg')

const pool =  new pg.Pool(
  {connectionString: process.env.DATABASE_URL})

/*const pool = new pg.Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
})*/

app.get('/ola',(req, res)=>{
  res.status(200).send('Ola')
})

app.get('/hello',(req, res)=>{
  res.status(200).send('hello')
})

app.get('/contatos',async (req, res) => {
  try {
    let cliente = await pool.connect()
      let dados = await cliente.query('select * from tb_contatos')
      cliente.end()
      res.send(dados.rows)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})