const express = require("express");
const app = express();

app.set("port", 8084);

app.use(express.json());

app.use(require("./routes/results"));

app.listen(app.get("port"), () => {
  console.log("server on port 8084");
});
