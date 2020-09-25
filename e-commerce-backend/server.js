// Imports:
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routers = require("./routers");
const notifyStart = require("./helpers/server/notifyStart");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");

// Configurations:
const app = express();
app.use(express.json());
dotenv.config({ path: "./config/env/config.env" });
const PORT = process.env.PORT;

app.use(
  cors({
    credentials: true, // important part here
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// MongoDB Connection:
connectDatabase();

// Routers Middleware:
app.use("/", routers);

// Error Handling Middleware:
app.use(customErrorHandler);

// Static Files:
app.use(express.static(path.join(__dirname, "public")));

// Start server:
app.listen(PORT, notifyStart(PORT));
