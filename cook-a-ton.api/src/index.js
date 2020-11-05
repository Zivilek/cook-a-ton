import './config/database';
import server from './config/server';
import { PORT } from "./config/variables"

server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});