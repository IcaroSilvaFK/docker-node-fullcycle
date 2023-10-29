import knex from "knex";

const knexConfig = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT ?? "") || 3306
  }
})

knexConfig.on("query", query => {
  console.log(query.sql)
})


async function main() {
  try {
    await knexConfig.schema.createTableIfNotExists("people", table => {
      table.increments("id").primary()
      table.string("username").notNullable()
    })
  } catch (err) {
    console.log(err)
  }
}
main()

export { knexConfig };
