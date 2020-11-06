import morgan from "morgan";
const logPattern = ":method :url :status :response-time ms"

export default morgan(logPattern);