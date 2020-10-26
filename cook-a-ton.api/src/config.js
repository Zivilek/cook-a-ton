require('dotenv').config();

module.exports = {
    name: 'API',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3004,
    base_url: process.env.BASE_URL || 'http://localhost:3004',
    db: {
        uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/api',
    },
};