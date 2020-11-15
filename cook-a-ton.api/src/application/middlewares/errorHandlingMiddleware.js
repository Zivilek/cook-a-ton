import { ImageUploadError } from "../../common/errors/imageUploadError";

export default function(e, req, res, next) {
    console.error(`An error has occured: ${e.message} \n Stack trace: ${e.stack}`);
    if (e instanceof ImageUploadError) {
        return res.status(400).send({
            error: {
                name: e.name,
                message: e.message
            }
        });
    }
    res.status(500).send(`Request ${req.url} could not be served.`);
};