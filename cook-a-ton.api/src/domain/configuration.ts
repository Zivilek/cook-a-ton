import dotenv from 'dotenv';

dotenv.config();

const PORT: number = parseInt(process.env.PORT || "3004");
const DB_URL: string = process.env.DB_URL || "";
const IMAGES_API_KEY: string = process.env.IMAGES_API_KEY || "";
const IMAGES_URL: string = process.env.IMAGES_URL || "";

export { PORT, DB_URL, IMAGES_API_KEY, IMAGES_URL }