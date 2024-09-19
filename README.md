### Installation

`Node.JS:` Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

Use `npm install` to install all dependencies.

### What is Gherkin?

Gherkin allows for test scripts to be written in a human readable format, which can then be shared between all of the stakeholders in the product development.

Gherkin files typically have a `.feature` file extension that contain tests, written in the Gherkin language.

```feature
    Given I am on the login page
    When I enter my username and password
    Then I should be redirected to the home page
```

### Run Tests

To execute the entire test suite in local development, use:

`npm run test`


### Test report:

To generate and view report locally, run `npm run report`. A typical cucumber report will look like this

<img alt="Report" src="https://github.com/MEsen1/BBCNSWApiTest/blob/main/images/report.png?raw=true" width="900px" />