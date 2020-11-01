import swaggerUI from "swagger-ui-express";
import swaggerDoc from "../../../swagger.json"

export default (router) => {
    router.use(`/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}