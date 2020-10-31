class HealthCheckController {
    constructor() {
        this.get = this.get.bind(this);
    }

    async get(req, res) {
        return res.status(200).send(`Healthy`);
    }
}

export default new HealthCheckController();