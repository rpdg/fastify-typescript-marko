/// <reference path="custom-typings.d.ts" />
/// <reference path="model.d.ts" />

import * as fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";


declare module "fastify" {
	interface FastifyReply<HttpResponse> {
		view: (templatePath: string, data: any, opt?: any) => void;
	}
}
