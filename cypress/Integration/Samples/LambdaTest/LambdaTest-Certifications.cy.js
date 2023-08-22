/// <reference types="cypress" />

describe('LambdaTest-Certifications', () => {

  beforeEach(() => {
    cy.log('Open the Lambdatest App before running the each test case');
    cy.visit("https://www.lambdatest.com/selenium-playground/")
  })

  it('TC001_Drag & Drop Sliders', () => {
    console.log(Cypress.browser);
    cy.log('Set Drag & Drop Slider from 15 to 95');
    cy.get("*[href='https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo']").click();
    cy.get("*[value='15']")
      .trigger('mousemove')
      .invoke('val', 95)
      .click({force: true})
    cy.get("*[class='flex smtablet:block']").first().screenshot();
    cy.get("*[value='15']").should('have.value','95');
  })

  it('TC02_Input Form Validation', () => {
    console.log(Cypress.browser);
    cy.log('Fill the Input Form Submit and Validated the submission successfully');
    cy.viewport('samsung-note9');
    cy.wait(5000);
    cy.get("a[href='https://www.lambdatest.com/selenium-playground/input-form-demo']").click();
    // cy.injectAxe();
    cy.get("input#name").type('Ajay');
    cy.get("*[id='inputEmail4']").type('ajay.gupta1711@gmail.com');
    cy.get("*[name='password']").type('Admin@123');
    cy.get("*[name='company']").type('Tech Company');
    cy.get("input#websitename").type('www.techcompany.com');
    cy.get("*[name='country']").select('IN').should('have.value', 'IN');
    cy.get("*[name='city']").type('Pune');
    cy.get("input#inputAddress1").type('100 Main Street');
    cy.get("input#inputAddress2").type('PO Box 100');
    cy.get("input#inputState").type('Maharashtra');
    cy.get("*[id='inputZip']").type('444000');
    cy.get("*[class='w-full px-15 smtablet:mt-20']").screenshot();
    cy.get("*[class='bg-lambda-900 hover:bg-transparent hover:text-lambda-900 border border-lambda-900 text-white rounded p-10 focus:outline-none w-180 selenium_btn py-5 px-10 rounded']").click();
    cy.get("*[class='success-msg hidden']").should('include.text', 'Thanks for contacting us, we will get back to you shortly');
    cy.get("*[class='w-full px-15 smtablet:mt-20']").screenshot();
  })
})