import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";
import morgan from "morgan";
const logPatter = ":method :url :status :response-time ms"
const server = express();

server.use(bodyParser.json());
server.use(morgan(logPatter));

var router = express.Router();
setRoutes(router);
server.use('/api', router);

server.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

export default server;