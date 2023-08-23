## Project: 
LambdaTest Certifications - https://www.lambdatest.com/selenium-playground/
1. Drag & Drop Sliders
2. Input Form Submit


## Pre-requisites

Before getting started with Selenium automation testing on LambdaTest, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6 to NodeJS v16**. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* For Cypress Download - https://download.cypress.io/desktop


## Run JavaScript Tests With Node.js On LambdaTest


## Repository:
## GitHub Link:
https://github.com/ajaygupta1711/LambdaTestCertification/tree/master
## Gitpod Link:
https://gitpod.io/new/#https://github.com/ajaygupta1711/LambdaTestCertification/tree/master


## Test IDs on LambdaTest Application:
## Test ID-1:
MTCXM-GPOGT-UXYBZ-XEC8O
## Test ID-2:
SZ0KY-U0QXS-5PQNM-1IWLI


## Test Name:
LambdaTest-Certifications.cy.js


## Command to run the test on the LambdaTest:

1. Open the command prompt and navigate to the path where the respository is saved.
2. Start using below mentioned command one by one.

> set LT_USERNAME="ajay.gupta1711"
> set LT_ACCESS_KEY="bqYNGEZJNRPsajxx5pBdMJSpzeHNBFrSQEd9xJwnk5fQDZCC22"
> npm install -g lambdatest-cypress-cli
> npm install
> lambdatest-cypress init --cv=10
> lambdatest-cypress run

3. Opent the 'lambdatest-config.json' file and Update the Credentials and Specs Path (Use below option ## Setting up Your Authentication).


## Setting up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Cypress Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=nodejs-selenium-sample) or through [LambdaTest Profile](https://accounts.lambdatest.com/login/?utm_source=github&utm_medium=repo&utm_campaign=nodejs-selenium-sample).

Set LambdaTest `Username` and `Access Key` in environment variables.

  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```


## Writing your Test Cases

Create the file under Integration folder with the extention of '<file name>.cy.js'


## Executing the Test

npx cypress open
npx cypress run --browser chrome


## Note: Create another test 'LambdaTest-Certifications1.cy.js' including Xpath locators and also, used InjextAxe.
However, both are not working while executing the tests on LambdaTest Application.


## Thank you for providing the opportunity to learn and gain the knowledge of Cypress Automation Tool !!