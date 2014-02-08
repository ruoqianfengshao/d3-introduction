(function() {
  if (!this.require) {
    var modules = {}, cache = {};

    var require = function(name, root) {
      var path = expand(root, name), indexPath = expand(path, './index'), module, fn;
      module   = cache[path] || cache[indexPath];
      if (module) {
        return module;
      } else if (fn = modules[path] || modules[path = indexPath]) {
        module = {id: path, exports: {}};
        cache[path] = module.exports;
        fn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        return cache[path] = module.exports;
      } else {
        throw 'module ' + name + ' not found';
      }
    };

    var expand = function(root, name) {
      var results = [], parts, part;
      // If path is relative
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.define = function(bundle) {
      for (var key in bundle) {
        modules[key] = bundle[key];
      }
    };

    this.require.modules = modules;
    this.require.cache   = cache;
  }

  return this.require;
}).call(this);this.require.define({"app/index":function(exports, require, module){(function() {
  $(function() {
    var lineData, lineFunction, svg1;
    $.deck(".slide");
    lineData = [
      {
        "x": 1,
        "y": 5
      }, {
        "x": 20,
        "y": 20
      }, {
        "x": 40,
        "y": 10
      }, {
        "x": 60,
        "y": 40
      }, {
        "x": 80,
        "y": 5
      }, {
        "x": 100,
        "y": 60
      }
    ];
    lineFunction = d3.svg.line().x(function(d) {
      return d.x;
    }).y(function(d) {
      return d.y;
    }).interpolate("linear");
    svg1 = d3.select("#svg1").attr("width", 200).attr("height", 200);
    return svg1.append("path").attr("d", lineFunction(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none");
  });

}).call(this);
;}});
this.require.define({"app/app":function(exports, require, module){(function() {
  module.exports = function() {};

}).call(this);
;}});
