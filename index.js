import express from "express";
import { configDotenv } from "dotenv";
import sequelize from "./config/db.js";
import router from "./routes/auth.js";

configDotenv();

const app =express();

app.use("/auth" ,router);

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database connected and tables synced!");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
