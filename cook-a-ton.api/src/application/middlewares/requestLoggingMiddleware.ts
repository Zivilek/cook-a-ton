import morgan from "morgan";
const logPattern: string = ":method :url :status :response-time ms"

export default morgan(logPattern);