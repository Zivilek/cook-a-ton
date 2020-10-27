import dotenv from 'dotenv';
dotenv.config();
import './config/database';
import server from './config/server';

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});