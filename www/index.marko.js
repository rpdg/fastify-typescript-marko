// Compiled using marko@4.12.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/fastify-marko$1.0.0/www/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./layout.marko")),
    module_config_module = require("../dist/config"),
    config_module = module_config_module.default || module_config_module,
    config = module_config_module.config,
    module_utils_module = require("../dist/utils"),
    utils_module = module_utils_module.default || module_utils_module,
    add = module_utils_module.add,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    f_title_template = marko_loadTemplate(require.resolve("./components/f-title/index.marko")),
    marko_loadTag = marko_helpers.t,
    f_title_tag = marko_loadTag(f_title_template),
    f_button_template = marko_loadTemplate(require.resolve("./components/f-button/index.marko")),
    f_button_tag = marko_loadTag(f_button_template),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function sum(a, b) {
    return a + b;
};

function render(input, out, __component, component, state) {
  var data = input;

  let program = input.program;

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<p>port: " +
                  marko_escapeXml(config.DEFAULT_PORT) +
                  "</p><p>add: " +
                  marko_escapeXml(add(1, 2)) +
                  " , " +
                  marko_escapeXml(sum(4, 5)) +
                  "</p>");

                f_title_tag({
                    program: program
                  }, out, __component, "4");

                out.w("<div class=\"b1\">");

                f_button_tag({
                    pid: program.id
                  }, out, __component, "6");

                out.w("</div>");
              }
            },
          [hasRenderBodyKey]: true
        }, {
          pageTitle: "home"
        })
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".b1{\r\n        .primary {\r\n            background-color:#f9c;\r\n        }\r\n    }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/fastify-marko$1.0.0/www/index.marko",
    tags: [
      "./layout.marko",
      "./components/f-title/index.marko",
      "./components/f-button/index.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
