import axios from "axios"
import FormData from "form-data"
import { IMAGES_URL, IMAGES_API_KEY } from "../../domain/configuration"
import { ImageUploadError } from "../../common/errors/imageUploadError"

async function uploadBase64Image(name, imageData) {
    try {
        let body = new FormData();
        body.append('image', imageData || "");
        let response = await axios.post(IMAGES_URL, body, {
            headers: body.getHeaders(),
            params: {
                key: IMAGES_API_KEY,
            }
        })

        return {
            imageUrl: response.data.data.url
        };
    } catch (e) {
        throw new ImageUploadError(e.response.data.error.message);
    }
}

export { uploadBase64Image }