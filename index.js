const { copy, exists } = require("./copy-tools");

class CopyPlugin {
  constructor(patterns = [], option = {}) {
    this.patterns = patterns;
    this.option = option;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync("CopyPlugin", (compilation, callback) => {
      this.patterns.map(function(item) {
        var from = item.from;
        var to = item.to;
        exists(from, to, copy);
      });
    });
  }
}

module.exports = CopyPlugin;
