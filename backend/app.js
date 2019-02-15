const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const router = express.Router();
const url = "mongodb://mongo:27018/opie";

try {
  mongoose.connect(url, {
    useNewUrlParser: true
  });
} catch (error) {
  console.log(error);
}

let port = process.env.backendPORT || 5000;

routes(router);

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use("/api", router);

app.listen(port, () => {
  console.log(`API started at port: ${port}`);
});
