class ImageUploadError extends Error {
    constructor(message) {
        super(message)
        this.name = "ImageUploadError";
    }
}

export { ImageUploadError }