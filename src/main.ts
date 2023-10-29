import { faker } from '@faker-js/faker'
import 'dotenv/config'
import express from 'express'
import { knexConfig } from './configs/knexjs.config'

const PORT = 3000

async function main() {

  const app = express()

  try {
    app.get("/", async (req, reply) => {
      console.log("PROCESS REQUEST")
      await knexConfig("people").insert({
        username: faker.internet.userName()
      })

      const users = await knexConfig("people").select()

      reply.send(`
        <h1>Full Cycle Rocks!</h1>
        <h2>Users</h2>
        <pre>
          ${JSON.stringify(users, null, 2)}
        </pre>
      `)
    })

    app.listen(+PORT, () => {
      console.log(`⛴️  Server running at port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}
main()
