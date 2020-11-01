class AbstractRepository {
    constructor(model) {
        this.model = model.getMongooseModel();
        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async find(query, skip, limit) {
        return await this.model
            .find(query)
            .skip(skip)
            .limit(limit);
    }

    async findById(id) {
        return await this.model
            .findById(id);
    }

    async getAll(query) {
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;

        try {
            let items = await this.find(query, skip, limit);
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

    async get(id) {

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

    async insert(data) {
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

    async update(id, data) {
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

    async delete(id) {
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