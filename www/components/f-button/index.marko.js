// Compiled using marko@4.12.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              pid: 0
            };
        },
        onMount: function() {},
        shout: function() {
          alert(("My favorite number is " + this.state.pid) + "!");
        }
      },
    marko_componentType = "/fastify-marko$1.0.0/www/components/f-button/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
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
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".primary {\r\n    color:#09c;\r\n    font-size:3em;\r\n  }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/fastify-marko$1.0.0/www/components/f-button/index.marko",
    component: "./index.marko"
  };
