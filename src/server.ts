///<reference path="./typings/index.d.ts"/>

import * as fastify from "fastify";
import * as http from "http";
import { ServerResponse, IncomingMessage } from "http";
import * as path from "path";
import * as marko from "marko";

import { config } from "./config";

const pointOfView = require("point-of-view");
import { Program } from "./typings/model";

const app = fastify({
	logger: true
});

const isProduction = true ;
const outputDir = path.join(__dirname, '../static');
// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require('lasso').configure({
	plugins: [
		"lasso-sass",
	  'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
	],
	outputDir: outputDir, // Place all generated JS/CSS/etc. files into the "static" dir
	bundlingEnabled: isProduction, // Only enable bundling in production
	minify: isProduction, // Only minify JS and CSS code in production
	fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
  });


app.register(pointOfView, {
	engine: {
		marko
    },
    template : 'www'
});

app.register(require('fastify-static'), {
	root: outputDir,
	prefix: '/static'
  });


  app.get(
	"/favicon.ico",
	(
		req: fastify.FastifyRequest<IncomingMessage>,
		res: fastify.FastifyReply<ServerResponse>
	) => {
		res.code(204).send();
	}
);



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

app.get("/", (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	//req.log.info("Some info about the current request");
	reply.type("text/html").view("./www/index.marko", { program });
});

app.get("/1", (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	//req.log.info("Some info about the current request");
	reply.type("text/html").view("./www/1.marko", { program });
});

app.get("/2", (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	reply.type("text/html").view("./www/lasso.marko", {
		name: 'Frank',
		count: 30,
		colors: ['red', 'green', 'blue']
	  });
});





const PORT: number = config.DEFAULT_PORT;
const dev = process.env.NODE_ENV !== "production";

app.setErrorHandler(function(err, request, reply) {
	//app.log.error(err);
	console.error(err);
});


// Run the server!
const start = async () => {
	try {
		await app.listen(PORT);
		app.log.info(`server listening on ${PORT}`, dev.toString());
		app.log.info(`${app.printRoutes()}`);
	} catch (err) {
		app.log.info(err);
		process.exit(1);
	}
};

start();
