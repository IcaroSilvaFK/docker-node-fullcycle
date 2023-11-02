import knex from "knex";

const knexConfig = knex({
  client: 'mysql2',
  connection: {
    host: 'mysqldb',
    user: 'root',
    password: 'root',
    database:  'api',
    port: 3306
  }
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
