const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// configure db
const server = process.env.DB_SERVER;
const db = process.env.DB;
const connectionString = `${server}/${db}`;
mongoose.connect(connectionString);

// Enable JSON parsing
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"],
  })
);

// Middlewares
const NormalizeRequestBody = require("./src/middlewares/NormalizeRequestBodyProperties");
const GlobalErrorHandlingMiddleware = require("./src/middlewares/globalErrorHandling.middleware");
const RouteNotFoundMiddleware = require("./src/middlewares/RouteNotFound.middleware");

// Transform request body properties to cammel case
app.use(NormalizeRequestBody);

// Routes
const newsRoutes = require("./src/routes/News.routes");

app.use("/news", newsRoutes);

// Error-handling middlewares
app.use(GlobalErrorHandlingMiddleware);
app.use(RouteNotFoundMiddleware);

// Start the server
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));
