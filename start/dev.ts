import { config } from './../config/index';
import server from "./../server";


const PORT: number = config.DEFAULT_PORT;
const dev = process.env.NODE_ENV !== "production";

// Run the server!
const start = async () => {
    try {
        await server.listen(PORT);
        console.log(`server listening on ${PORT}` , dev.toString());
        console.log(`${server.printRoutes()}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();

