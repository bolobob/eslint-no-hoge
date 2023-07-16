const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "rules";

module.exports = {
  "env" : {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": ["rulesdir"],
  "extends": "eslint:recommended",
  "rules": {
    "rulesdir/taboo-vars": [2, ["hoge", "fuga", "piyo"]],
    "rulesdir/no-hoge": 2
  }
}
