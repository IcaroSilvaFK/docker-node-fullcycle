import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (_,res) => {
  res.send("<h1>Full Cycle Rocks!</h1>")
})

app.listen(PORT, () => {
  console.log(`🗽Server listening at http://localhost:${PORT}`)
})