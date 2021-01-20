require("dotenv").config();
require("appmetrics-dash").attach();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const productRoutes = require("./routes/product");

const MONGO_URL = process.env.DATABASE;

//DB Connection
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch(() => {
    console.log("DB CONNECTION FAILED!");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Rahat Backend");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}!`);
});
