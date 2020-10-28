import mongoose, { Schema } from "mongoose";
import mongooseStringQuery from "mongoose-string-query";
import timestamps from "mongoose-timestamp";

class BaseModel {
    constructor(name) {
        this.name = name;
    }

    createSchema() {}

    initSchema(schema) {
        schema.plugin(timestamps);
        schema.plugin(mongooseStringQuery);
        mongoose.model(this.name, schema, this.name);
    }

    getMongooseModel() {
        this.initSchema(this.createSchema());

        return mongoose.model(this.name);
    }
}

export default BaseModel;