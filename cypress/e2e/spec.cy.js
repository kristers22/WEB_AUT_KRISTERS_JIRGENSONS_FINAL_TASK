import {FormsPage} from "../../pageObjects/FormsPage"

describe("FINAL WORK", () => {
  context("Made by Kristers Jirgensons", () => {
    beforeEach(() => {
      FormsPage.visit();
    });
    
    it("Filling in Student Registration Form", () => {
      
      FormsPage.firstNameField.type("Kiki");
      FormsPage.lastNameField.type("Jefferson");
      FormsPage.emailField.type("kikijefferson@email.com");
      FormsPage.genderCheck.contains("Male").click();
      FormsPage.mobileNumberField.type("1234567890");

      FormsPage.dateBox.click();
      FormsPage.selectMonth.select("February");
      FormsPage.selectYear.select("1930");
      FormsPage.selectDate.click();

      FormsPage.subjectsField.type("Economics{enter}");
      FormsPage.hobbiesCheckbox.contains("Music").click();

      FormsPage.uploadImage.click();

      FormsPage.stateDropdown.click();
      FormsPage.selectState.contains('NCR').click();

      FormsPage.cityDropdown.click();
      FormsPage.selectCity.contains('Delhi').click();

      FormsPage.submitButton.click();

      // validation

      const expectedData = {
        "Student Name": "Kiki Jefferson",
        "Student Email": "kikijefferson@email.com",
        "Gender": "Male",
        "Mobile": "1234567890",
        "Date of Birth": "28 February,1930",
        "Subjects": "Economics",
        "Hobbies": "Music",
        "Picture": "image.jpg",
        "Address": "",
        "State and City": "NCR Delhi"
      };

      Object.entries(expectedData).forEach(([label, value]) => {
        cy.get('table tbody tr')
          .contains('td', label) 
          .parent('tr')          
          .within(() => {
            cy.get('td').eq(1).should('have.text', value);
          });
      });
  
    });
  });
});