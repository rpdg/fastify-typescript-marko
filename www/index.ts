import { Program } from "../typings/model";
import template from "./index.marko";

const program: Program = {
	id: "123",
	title: "TV",
	cover: "https://cdn.example.com/images/tv",
	url: {
        FD : '',
        SD : '',
        HD : '',
    }
};

const out = template.renderToString({
	program
});