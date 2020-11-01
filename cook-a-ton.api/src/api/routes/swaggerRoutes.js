import swaggerUI from "swagger-ui-express";
import yaml from "yamljs";

const swaggerDoc = yaml.load("./swagger.yaml");

export default (router) => {
    router.use(`/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}