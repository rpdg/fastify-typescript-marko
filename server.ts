import * as fastify from "fastify";
import * as http from "http";
const pointOfView = require("point-of-view");
import * as marko from "marko";
import { Program } from "./typings/model";

const app = fastify({
	logger: {
		level: "info"
	}
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


app.get( "/",  (
		req: fastify.FastifyRequest<http.IncomingMessage>,
		reply: fastify.FastifyReply<http.ServerResponse>
	) => {
        reply.type('text/html')
        .view( "./www/index.marko", { program }, { stream: true });
	}
);

app.setErrorHandler(function(err, request, reply) {
	console.log(err);
});

export default app;
