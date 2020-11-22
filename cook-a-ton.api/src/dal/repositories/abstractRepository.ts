import { Model, Document, Types } from "mongoose";
import { BaseEntity } from "../../domain/entities/baseEntity";

class AbstractRepository<T extends BaseEntity> {
    model: any;
    constructor(model: Model<Document & T>) {
        this.model = model;
        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async find(query: string) {
        return await this.model
            .find(query)
    }

    async findById(id: Types.ObjectId) {
        return await this.model
            .findOne({ _id: id });
    }

    async getAll(query: string) {
        try {
            let items = await this.find(query);
            let total = await this.model.countDocuments();

            return {
                statusCode: 200,
                data: items,
                total
            };
        } catch (errors) {
            return {
                statusCode: 500,
                errors
            };
        }
    }

    async get(id: Types.ObjectId) {

        try {
            let item = await this.findById(id);

            return {
                statusCode: 200,
                data: item,
            };
        } catch (errors) {
            return {
                statusCode: 500,
                errors
            };
        }
    }

    async insert(data: Document) {
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    statusCode: 201,
                    data: item
                };
        } catch (error) {
            console.log("error", error);
            return {
                statusCode: 500,
                message: error.errmsg || "Not able to create item",
                errors: error.errors
            };
        }
    }

    async update(id: Types.ObjectId, data: Document) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return {
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                statusCode: 500,
                error
            };
        }
    }

    async delete(id: Types.ObjectId) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item)
                return {
                    statusCode: 404,
                    message: "item not found"
                };

            return {
                deleted: true,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                statusCode: 500,
                error
            };
        }
    }
}

export default AbstractRepository;