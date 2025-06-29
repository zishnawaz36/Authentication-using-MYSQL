import express from "express";
import { configDotenv } from "dotenv";
import sequelize from "./config/db.js";
import router from "./routes/auth.js";

configDotenv();

const app =express();

app.use(express.json());

app.use("/auth" ,router);

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database connected and tables synced!");
    app.listen(3000, () => {

      console.log("Server running at http://localhost:3000");
    });
  })
   
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
