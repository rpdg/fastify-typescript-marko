// Compiled using marko@4.11.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/fastify-marko$1.0.0/components/f-title/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"bigText\">" +
    marko_escapeXml(input.program.title) +
    "</div><script>\r\n    console.log('" +
    marko_str(input.program) +
    "');\r\n</script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/fastify-marko$1.0.0/components/f-title/index.marko"
  };
