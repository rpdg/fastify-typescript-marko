// Compiled using marko@4.11.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.number = 123;
        }
      },
    marko_componentType = "/fastify-marko$1.0.0/components/f-button/component-browser",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<button class=\"primary\"" +
    marko_attr("data-marko", {
      onclick: __component.d("shout", false)
    }, false) +
    ">program-id: " +
    marko_escapeXml(input.pid) +
    "</button>");
}

marko_template._ = marko_renderer(render, {
    ___split: true,
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/fastify-marko$1.0.0/components/f-button/component-browser",
    component: "./component-browser",
    deps: [
      "marko/src/components"
    ]
  };
