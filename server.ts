import * as fastify from "fastify";
import * as http from "http";
import { config } from "./config";

const pointOfView = require("point-of-view");

import * as marko from "marko";
import { Program } from "./typings/model";

const app = fastify({
	logger: true
});

app.register(pointOfView, {
	engine: {
		marko
	}
});

const opts = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					hello: {
						type: "string"
					}
				}
			}
		}
	}
};

function getHelloHandler(
	req: fastify.FastifyRequest<http.IncomingMessage>,
	reply: fastify.FastifyReply<http.ServerResponse>
) {
	reply.header("Content-Type", "application/json").code(200);
	reply.send({ hello: "world" });
}

//server.get("/", opts, getHelloHandler);

const program: Program = {
	id: "123",
	title: "TV",
	cover: "https://cdn.example.com/images/tv",
	url: {
		FD: "",
		SD: "",
		HD: ""
	}
};

app.get(
	"/",
	(
		req: fastify.FastifyRequest<http.IncomingMessage>,
		reply: fastify.FastifyReply<http.ServerResponse>
	) => {
		req.log.info("Some info about the current request");
		reply
			.type("text/html")
			.view("./www/index.marko", { program }, { stream: true });
	}
);

const PORT: number = config.DEFAULT_PORT;
const dev = process.env.NODE_ENV !== "production";

app.setErrorHandler(function(err, request, reply) {
	console.log(err);
});

// Run the server!
const start = async () => {
	try {
		await app.listen(PORT);
		app.log.info(`server listening on ${PORT}`, dev.toString());
		console.log(`${app.printRoutes()}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

start();
