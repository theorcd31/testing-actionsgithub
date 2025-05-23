import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

app.get('/api/messages', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM messages')
  res.json(rows)
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
