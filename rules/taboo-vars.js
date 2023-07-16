// rules/taboo-vars.js

"use-strict";

const rule = function(context) {
  console.log(context.options[0])
  let vars = [];

  if (Array.isArray(context.options[0])) {
    vars = context.options[0];
  }

  return {
    Identifier: function(node) {
      if (vars.includes(node.name)) {
        context.report({
          node: node,
          message: node.name + " is not allowed"
        });
      }
    }
  };
}

rule.schema = [
  {
    type: "array",
    items: { type: "string" },
    uniqueItems: true
  }
]

module.exports = rule;

