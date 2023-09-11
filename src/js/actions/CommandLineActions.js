"use strict";

var AppConstants = require("../constants/AppConstants");
var AppDispatcher = require("../dispatcher/AppDispatcher");

var ActionTypes = AppConstants.ActionTypes;

var CommandLineActions = {
  submitCommand: function (text) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.SUBMIT_COMMAND,
      text: text,
    });
  },
  importantfuncition: function () {
    var x = 1;
    console.log("important work");
    var y = 2;
    console.log("should not be here");
  },
  secondImportantFunction: function () {
    console.log("here");
  },
};

module.exports = CommandLineActions;
