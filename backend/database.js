import knexLibrary from "knex";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "../Database/tasks.sqlite3"),
  },
  useNullAsDefault: true,
});

export default knex;
