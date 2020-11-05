import dotenv from 'dotenv';

dotenv.config();

var PORT = process.env.PORT || 3004;
var DB_URL = process.env.DB_URL;
var IMAGES_API_KEY = process.env.IMAGES_API_KEY;
var IMAGES_URL = process.env.IMAGES_URL;

export { PORT, DB_URL, IMAGES_API_KEY, IMAGES_URL }