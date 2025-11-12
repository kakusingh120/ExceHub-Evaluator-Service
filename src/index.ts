import express, { Express, Request, Response } from "express";

import serverConfig from "./config/server.config.js";
import apiRouter from "./routes/index.js";
import SampleProducer from "./producers/SampleProducer.js";
import SampleWorker from "./workers/SampleWorker.js";

const app: Express = express();
const { PORT } = serverConfig;

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost:${PORT}`);

    SampleWorker("SampleQueue");


    SampleProducer("SampleJob", {
        name: "krish",
        company: "Pine Labs",
        position: "software developer",
        location: "Remote | Noida",
    });
});
