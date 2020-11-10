import { uploadBase64Image } from "../../integrations/services/imageUploadService"

class ImageController {
    constructor() {
        this.post = this.post.bind(this);
    }

    async post(req, res) {
        let response = await uploadBase64Image(req.body.name, req.body.image);

        return res.status(200).send(response);
    }

}

export default new ImageController();