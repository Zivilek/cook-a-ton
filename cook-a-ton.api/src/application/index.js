import '../dal/database';
import server from './server';
import { PORT } from "../domain/configuration"

server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});