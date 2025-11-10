import express, { Express, Request, Response } from "express";

import serverConfig from "./config/server.config.js";
import apiRouter from "./routes/index.js";

const app: Express = express();
const { PORT } = serverConfig;

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);
});
