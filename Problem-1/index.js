const express = require("express");
const logger = require("morgan");
const router = require("./routes/indes.routes");

const app = express();

app.use(express.json());

app.use(logger("dev"));

app.use("/api", router);

const port = 3000;
app.listen(port, () => {
  console.log("Environment Loaded ", port);
});
