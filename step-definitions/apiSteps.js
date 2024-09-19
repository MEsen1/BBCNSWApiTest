import { Given, When, Then } from "@cucumber/cucumber";

Given("I make a GET request to {string}", async function (endpoint) {
  const startTime = performance.now();
  this.response = await this.apiClient.getRequest(endpoint);
  const endTime = performance.now();
  this.responseTime = parseFloat((endTime - startTime).toPrecision(6));
  this.data = await this.response.body.data;
});

When("the response is received", async function () {
  this.expect(this.data).to.exist;
});

Then("the {string} header should be {string}", async function (header, value) {
  this.expect(this.response.header[`${header}`]).to.include(value);
});

Then(
  "number of items in the data array should be {int}",
  async function (items) {
    this.expect(this.data.length).to.equal(items);
  }
);

Then("the HTTP status code should be {int}", async function (statusCode) {
  this.expect(this.response.status).to.equal(statusCode);
});

Then(
  "the response time should be less than {int} milliseconds",
  async function (timeLimit) {
    this.expect(this.responseTime).to.be.below(timeLimit);
  }
);

Then(
  "{string} field should be set to {string} for every track",
  async function (field, type) {
    await this.data.forEach((element) => {
      this.expect(element[`${field}`]).to.exist;
      this.expect(element[`${field}`]).to.equal(type);
    });
  }
);

Then(
  "each track in the data array should have the {string} field that is not null or empty",
  async function (fieldName) {
    await this.data.forEach((element) => {
      this.expect(element[`${fieldName}`]).to.exist;
      this.expect(element[`${fieldName}`]).to.not.be.null;
      this.expect(element[`${fieldName}`]).to.not.be.empty;
      this.expect(
        typeof element[`${fieldName}`] == "object"
          ? Object.keys(element[`${fieldName}`]).length
          : element[`${fieldName}`].length
      ).to.be.greaterThan(0);
    });
  }
);

Then(
  "each track in the data array should have the {string} field in {string} that is not null or empty",
  async function (subField, field) {
    await this.data.forEach((element) => {
      if (element[`${field}`] && Array.isArray(element[`${field}`])) {
        element[`${field}`].forEach((title) => {
          this.expect(title[`${subField}`]).to.exist;
          this.expect(title[`${subField}`]).to.not.be.null;
          this.expect(title[`${subField}`]).to.not.be.empty;
          this.expect(title[`${subField}`].length).to.be.greaterThan(0);
        });
      }
    });
  }
);

Then(
  "only one track should have the “now_playing” field in “offset” set to true",
  async function () {
    const nowPlayingTracks = await this.data.filter(
      (element) => element.offset && element.offset.now_playing == true
    );
    this.expect(nowPlayingTracks).to.have.lengthOf(1);
  }
);

Then(
  "the response headers should contain the {string} field with a valid value",
  async function (field) {
    this.expect(await this.response.header[`${field}`]).to.exist;
    this.expect(await this.response.header[`${field}`])
      .to.be.a("string")
      .with.length.greaterThan(0);
    this.expect(
      new Date(await this.response.header[`${field}`]).toString()
    ).not.to.equal("Invalid Date");
  }
);
