"use strict";

var util = require("util");

var DefaultRegistry = require("undertaker-registry");

function TaskMetaDataRegistry() {
  DefaultRegistry.call(this);
}

util.inherits(TaskMetaDataRegistry, DefaultRegistry);

TaskMetaDataRegistry.prototype.set = function set(name, fn) {
  var metadata = {
    name: name,
  };

  var task = (this._task[name] = fn.bind(metadata));
  return task;
};

module.exports = TaskMetaDataRegistry;
