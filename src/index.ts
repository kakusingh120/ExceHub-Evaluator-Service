import express, { Express } from "express";
import serverConfig from "./config/server.config.js";

const app: Express = express();
const { PORT } = serverConfig;

app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
});
