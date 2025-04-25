import { BasePage } from "./basePage";
 
export class FormsPage extends BasePage {
  static get url() {
    return "automation-practice-form";
  };

  static get firstNameField() {
    return cy.get("#firstName");
  }

  static get lastNameField() {
    return cy.get("#lastName");
  }

  static get emailField() {
    return cy.get("#userEmail");
  }

  static get genderCheck() {
    return cy.get("#genterWrapper");
  }

  static get mobileNumberField() {
    return cy.get("#userNumber");
  }

  static get dateBox() {
    return cy.get("#dateOfBirthInput");
  }

  static get selectMonth() {
    return cy.get(".react-datepicker__month-select");
  }

  static get selectYear() {
    return cy.get(".react-datepicker__year-select");
  }

  static get selectDate() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }

  static get subjectsField() {
    return cy.get("#subjectsContainer");
  }

  static get hobbiesCheckbox() {
    return cy.get("#hobbiesWrapper");
  }
  
  static get uploadImage() {
    return cy.get('#uploadPicture').selectFile('cypress/files/image.jpg');
  }

  static get stateDropdown() {
    return cy.get('#state');
  }
  
  static get selectState() {
    return cy.get('.css-26l3qy-menu div');
  }

  static get cityDropdown() {
    return cy.get('#city');
  }
  
  static get selectCity() {
    return cy.get('.css-26l3qy-menu div');
  }
  
  static get submitButton() {
    return cy.get("#submit");
  }
  
};