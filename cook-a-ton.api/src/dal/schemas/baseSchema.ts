import { Document, model, Model, Schema, Types } from "mongoose";
import { BaseEntity } from "../../domain/entities/baseEntity";

abstract class BaseSchema<T extends BaseEntity> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    protected abstract createSchema(): Schema;

    private initSchema(schema: Schema): Model<Document & T> {
        return model<Document & T>(this.name, schema, this.name);
    }

    getMongooseModel(): Model<Document & T> {
        return this.initSchema(this.createSchema());
    }
}

export default BaseSchema;