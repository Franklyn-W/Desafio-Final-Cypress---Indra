describe("Logar no sistema, cadastrar, visualizar e excluir vaga de emprego", () => {
  
  beforeEach("Acessar site e realizar login", () => {
    
    cy.login("Admin", "admin123");
  
  });

  it('Cadastrar vaga', () => {
    
    cy.paginaVagas();
    cy.get("input[value='Add']").should("be.visible").click();
    cy.get("#addJobVacancy_jobTitle").should("be.visible").select("QA Engineer").should("have.value", "9");
    cy.get("#addJobVacancy_name").should("be.visible").type("QA Manager");
    cy.get("#addJobVacancy_hiringManager").should("be.visible").type("Orange Test");
    cy.get("#btnSave").should("be.visible").click();
    cy.contains(".message", "Successfully Saved");
  
  });

  it('Consutar vaga publicada usando filtros', () => {
    
    cy.paginaVagas();
    cy.get("#vacancySearch_jobTitle").should("be.visible").select("QA Engineer").should("have.value", "9");
    cy.get("#vacancySearch_jobVacancy").should("be.visible").select("QA Manager");
    cy.get("#btnSrch").should("be.visible").click();
    cy.get(".odd > :nth-child(2) > a").should("be.visible").click();
  
  });
  
  it('Excluir vaga', () => {
    
    cy.paginaVagas();
    cy.get("#vacancySearch_jobTitle").should("be.visible").select("QA Engineer").should("have.value", "9");
    cy.get("#vacancySearch_jobVacancy").should("be.visible").select("QA Manager");
    cy.get("#btnSrch").should("be.visible").click();
    cy.get("input[type='checkbox']").should("not.be.checked").should("be.visible").check();
    cy.get("[data-target='#deleteConfirmation']").click();
    cy.get("#dialogDeleteBtn").should("be.visible").should("have.value", "Ok").click();
    cy.get(".message").should("be.visible").should("contain", "Successfully Deleted");
  });
});