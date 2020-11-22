import { Document, model, Model, Schema } from "mongoose";

abstract class BaseSchema<T extends Document> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract createSchema(): Schema;

    initSchema(schema: Schema) {
        model<T>(this.name, schema, this.name);
    }

    getMongooseModel(): Model<T> {
        this.initSchema(this.createSchema());

        return model<T>(this.name);
    }
}

export default BaseSchema;