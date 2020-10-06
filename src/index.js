const express = require("express");
const app = express();

app.set("port", 8084);

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(require("./routes/results"));

app.listen(app.get("port"), () => {
  console.log("server on port 8084");
});
