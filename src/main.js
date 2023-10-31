import "dotenv/config";
import express from "express";
import statusMonitor from "express-status-monitor";

import { randomUUID } from "node:crypto";
import { knexConfig } from "./configs/knexjs.config.js";

const PORT = 3000;

function main() {
  const app = express();

  try {
    app.use(statusMonitor());
    app.get("/", async (req, reply) => {
      const uuid = randomUUID();

      await knexConfig("people").insert({
        username: uuid,
      });

      const users = await knexConfig("people").select();

      reply.send(`
        <h1>Full Cycle Rocks!</h1>
        <h2>Users</h2>
        <pre>
          ${JSON.stringify(users, null, 2)}
        </pre>
      `);
    });

    app.listen(+PORT, () => {
      console.log(`⛴️  Server running at port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
main();
