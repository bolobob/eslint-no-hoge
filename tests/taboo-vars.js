var rule = require("../rules/taboo-vars");
var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();

var valid = [{
  code: 'var fuga = "fuga";'
}];

var invalid = [{
  code: 'var fuga = "fuga";',
  options: [["fuga"]],
  errors: [{
    message: "fuga is not allowed",
    type: "Identifier",
  }]
}];

ruleTester.run("taboo-vars", rule, { valid, invalid });
