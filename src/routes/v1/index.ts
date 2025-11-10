import express from "express";
const v1Router = express.Router();

import { pingCheck } from "../../controllers/ping.controller.js";

v1Router.get("/ping", pingCheck);

export default v1Router;
