import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import topicosRoutes from "./src/routes/topicosRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  async middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "X-PINGOTHER, Content-Type, Authorization"
      );
      this.app.use(cors());
      next();
    });
  }

  routes() {
    this.app.use("/topicos", topicosRoutes);
  }
}

export default new App().app;
