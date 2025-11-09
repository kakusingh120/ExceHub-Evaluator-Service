import express, { Express } from "express";
import serverConfig from "./config/server.config.js";

const app: Express = express();
const { PORT } = serverConfig;

app.listen(PORT, () => {
  let x: number = 12;
  console.log(`Server is listening on port: http://localhost:${PORT}`);
});
