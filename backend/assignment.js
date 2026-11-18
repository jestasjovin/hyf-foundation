import express from "express";
import knex from "./database.js";

const app = express();

// Home page
app.get("/", (_request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Manager</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f1f5f9;
            font-family: Arial, sans-serif;
            color: #1e293b;
          }
          main {
            width: 90%;
            max-width: 500px;
            padding: 40px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          }
          h1 { margin-top: 0; }
          p { color: #64748b; }
          .card {
            margin-top: 30px;
            padding: 25px;
            background: #eff6ff;
            border-radius: 12px;
          }
          .count {
            margin-top: 10px;
            font-size: 48px;
            font-weight: bold;
            color: #2563eb;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Task Manager</h1>
          <p>Welcome to your task management dashboard.</p>
          <div class="card">
            <p>Total registered users</p>
            <div class="count" id="user-count">Loading...</div>
          </div>
        </main>
        <script>
          fetch("/user-count")
            .then((response) => response.json())
            .then((data) => {
              document.getElementById("user-count").textContent = data.count;
            })
            .catch(() => {
              document.getElementById("user-count").textContent = "Error";
            });
        </script>
      </body>
    </html>
  `);
});

// Total number of users
app.get("/user-count", async (_request, response) => {
  try {
    const result = await knex.raw("SELECT COUNT(*) AS count FROM user");
    response.json({ count: result[0].count });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not count users" });
  }
});

// Route 1: all tasks with status name and assigned user
app.get("/tasks", async (_request, response) => {
  try {
    const tasks = await knex.raw(`
      SELECT task.*, status.name AS status, user.name AS assigned_user
      FROM task
      LEFT JOIN status ON task.status_id = status.id
      LEFT JOIN user ON task.user_id = user.id
    `);
    response.json(tasks);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not retrieve tasks" });
  }
});

// Route 2: a single task by id
app.get("/tasks/:id", async (request, response) => {
  try {
    const task = await knex.raw("SELECT * FROM task WHERE id = ?", [
      request.params.id,
    ]);

    if (task.length === 0) {
      return response.status(404).json({ error: "Task not found" });
    }

    response.json(task[0]);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not retrieve task" });
  }
});

//  Route 3: all tasks of a  user
app.get("/users/:id/tasks", async (request, response) => {
  try {
    const user = await knex.raw("SELECT id, name FROM user WHERE id = ?", [
      request.params.id,
    ]);

    if (user.length === 0) {
      return response.status(404).json({ error: "User not found" });
    }

    const tasks = await knex.raw("SELECT * FROM task WHERE user_id = ?", [
      request.params.id,
    ]);

    response.json({ user: user[0].name, tasks });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Could not retrieve user tasks" });
  }
});

app.listen(3000, () => {
  console.log("> Ready on http://localhost:3000");
});
