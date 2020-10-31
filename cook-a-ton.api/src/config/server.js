import express from "express";
import bodyParser from "body-parser";
import configureRoutes from "./routes";
import _ from "express-async-errors";
import error from "../middlewares/errorHandlingMiddleware";
import routeNotFound from "../middlewares/routeNotFoundMiddleware";
import requestLogging from "../middlewares/requestLoggingMiddleware"
const server = express();

server.use(bodyParser.json());

server.use(requestLogging);
configureRoutes(server);

server.use(routeNotFound);
server.use(error);

export default server;