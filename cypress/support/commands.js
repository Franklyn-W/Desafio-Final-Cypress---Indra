// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("#txtUsername").should("be.visible").type(username);
    cy.get("#txtPassword").should("be.visible").type(password);
    cy.get("#btnLogin").should("be.visible").click();
    cy.get("#welcome").should("contain.text", "Welcome");

  });

  Cypress.Commands.add('cadastrarUsuario', (firstName, middleName, lastName, photofile) => {

    cy.get("#menu_pim_addEmployee").click({force: true});
    cy.get("input[id='firstName']").should("be.visible").type(firstName);
    cy.get("input[id='middleName']").should("be.visible").type(middleName);
    cy.get("input[id='lastName']").should("be.visible").type(lastName);
    cy.get("input[id='photofile']").selectFile(photofile).then(input => {
      expect(input[0].files[0].name).to.contain(".jpg" || ".png" || ".gif");
    });
    cy.get("input[id='btnSave']").should("be.visible").click();
    cy.get("input[id='personal_txtEmpFirstName']").should("be.visible").should("have.value", firstName);

  });

  Cypress.Commands.add('paginaVagas', () => {

    cy.get("#menu_recruitment_viewJobVacancy").click({force: true});
  
  });

  Cypress.Commands.add('paginaCriarUsuario', () => {
  
    cy.get("#menu_pim_addEmployee").click({force: true});
  
  });
  
  Cypress.Commands.add('paginaCadastrarAdmin', () => {
  
    cy.get("#menu_admin_viewSystemUsers").click({force: true});

  });

  Cypress.Commands.add('listaFuncionarios', () => {
    cy.get("#menu_pim_viewEmployeeList").click({force: true});
    cy.wait(1000); // Pausa adicionada pois o input seguinte só carrega o auto complete apos o carregamento da pagina.
  })