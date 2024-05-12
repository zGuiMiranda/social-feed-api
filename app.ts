import "reflect-metadata";
import express from "express";
import cors from "cors";
import { router as postRoutes } from "./src/post/router";
import "./src/config/sequelize/connections";

class App {
  public server: express.Application;
  public postRepository;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  routes() {
    this.server.use("/post", postRoutes);
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }
}

export default new App();
