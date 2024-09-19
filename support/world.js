import { setWorldConstructor, World } from "@cucumber/cucumber";
import apiClient from "../support/apiClient.js";
import { expect } from "chai";

setWorldConstructor(function (options) {
  this.parameters = options.parameters;
  this.expect = expect;
  // Initialize ApiClient with base url
  this.apiClient = new apiClient(options.parameters.baseUrl);
  this.response = null;
  this.responseTime = 0.0;
  this.data = null;
});
