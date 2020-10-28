import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

class Connection {
    constructor() {
        const url = process.env.DB_URL;
        mongoose.Promise = global.Promise;
        mongoose.set("useNewUrlParser", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useCreateIndex", true);
        mongoose.set("useUnifiedTopology", true);
        mongoose.connect(url);
    }
}

export default new Connection();