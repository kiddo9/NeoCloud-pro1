require("dotenv").config();
require("./config/DB_connection");
const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require("./route/routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v3", apiRoutes);

//listen to port
app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});
