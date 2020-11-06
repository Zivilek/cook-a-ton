import express from "express";
import configureRoutes from "./routes";
import _ from "express-async-errors";
import error from "./middlewares/errorHandlingMiddleware";
import routeNotFound from "./middlewares/routeNotFoundMiddleware";
import requestLogging from "./middlewares/requestLoggingMiddleware";
import bodyParser from "./middlewares/bodyParserMiddleware";
import cors from "./middlewares/corsMiddleware"

const server = express();

server.use(bodyParser);
server.use(requestLogging);
server.use(cors);

configureRoutes(server);

server.use(routeNotFound);
server.use(error);

export default server;