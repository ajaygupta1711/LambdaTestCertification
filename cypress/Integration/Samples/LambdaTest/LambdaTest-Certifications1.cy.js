/// <reference types="cypress" />

//require('cypress-axe')
//require('cypress-xpath');

describe('LambdaTest-Certifications', () => {

  beforeEach(() => {
    cy.log('Open the Lambdatest App before running the each test case');
    cy.visit("https://www.lambdatest.com/selenium-playground/")
  })

  it('TC001_Drag & Drop Sliders', () => {
    cy.log('Set Drag & Drop Slider from 15 to 95');
    cy.get("*[href='https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo']").click();
    cy.get("*[class='sp__range sp__range-success']")
      .trigger('mousemove')
      .invoke('val', 95)
      .click({force:true})
    //cy.get('output#rangeSuccess').should('have.value','95');
  })

  it('TC02_Input Form Validation', () => {
    cy.log('Fill the Input Form Submit and Validated the submission successfully');
    cy.viewport('samsung-note9');
    cy.wait(5000);
    cy.xpath("//a[normalize-space()='Input Form Submit']").click();
    // cy.injectAxe();
    cy.get("*[id='name']").type('Ajay');
    cy.xpath("//*[@id='inputEmail4']").type('ajay.gupta1711@gmail.com');
    cy.get("*[name='password']").type('Admin@123');
    cy.xpath("//*[@name='company']").type('Tech Company');
    cy.get("input#websitename").type('www.techcompany.com');
    cy.xpath("//*[@name='country']").select('IN').should('have.value', 'IN');
    cy.get("*[name='city']").type('Pune');
    cy.get("input#inputAddress1").type('100 Main Street');
    cy.xpath("//*[@id='inputAddress2']").type('PO Box 100');
    cy.get("input#inputState").type('Maharashtra');
    cy.xpath("//*[@id='inputZip']").type('444000');
    cy.screenshot("InputFormValidation1")
    cy.xpath("//*[contains(text(), 'Submit')]").click();
    cy.screenshot("InputFormValidation2")
    console.log();
    cy.get("*[class='success-msg hidden']").should('include.text', 'Thanks for contacting us, we will get back to you shortly');
  })
})