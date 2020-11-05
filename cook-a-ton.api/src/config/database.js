import mongoose from "mongoose";
import { DB_URL } from "./variables";

class Connection {
    constructor() {
        const url = DB_URL;
        mongoose.Promise = global.Promise;
        mongoose.set("useNewUrlParser", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useCreateIndex", true);
        mongoose.set("useUnifiedTopology", true);
        mongoose.connect(url);
    }
}

export default new Connection();