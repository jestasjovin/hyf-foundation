import express from "express";
function log(text) {
  console.log(`${text}`);
}
const app = express();
const port = 3005;

app.use((request, response, next) => {
  log("hey");
  next();
  //request.on()
});

app.use((request, response, next) => {
  // if(request.query.pass == "")
  return response.status(400).send("error");
});

app.get("/", (request, response) => {
  log("");
  response.status(200).send(`<h>Hellow</h>`);
});
app.get("/", (request, response) => {
  log("");
  response.status(200).send(`<h>Hellow</h>`);
});

//express require speciic response : return doesnt send response

app.post("/data", (request, response) => {
  log("");
  response.status(200).send("Hellow");
});

app.listen(port, () => {
  log(`Hey our server is running on port ${port}`);
});
