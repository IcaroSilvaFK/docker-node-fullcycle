import 'dotenv/config'
import express from 'express'
import { knexConfig } from './configs/knexjs.config'

const PORT = 3000

async function main() {

  const app = express()

  try {
    app.get("/", async (req, reply) => {
      const hostname = req.hostname

      await knexConfig("people").insert({
        username: hostname
      })

      reply.send("<h1>Full Cycle Rocks!</h1>")
    })
    app.listen(+PORT, () => {
      console.log(`⛴️  Server running at port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}
main()
