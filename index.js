
const express = require("express");
const server = express();

const actionsRouter = require("./routers/actions-router");
const projectsRouter = require("./routers/projects-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("API SPRINT CHALLENGE");
});

server.use("/actions", actionsRouter);
server.use("/projects", projectsRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});