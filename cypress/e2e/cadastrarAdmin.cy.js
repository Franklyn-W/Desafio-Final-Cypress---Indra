describe("Cadastro de administrador", () => {
  
  beforeEach("Acessar site e realizar login", () => {
    
    cy.login("Admin", "admin123");
  
  });
  it("Cadastrar funcionario", () => {
    
    cy.cadastrarUsuario("Franklyn", "Winston", "Diniz", "cypress/fixtures/perfil.jpg");
  
  });
  it("Criar usuario do funcionario e tornar Admin", () => {
    
    cy.paginaCadastrarAdmin();
    cy.get("input[id='btnAdd']").click();
    cy.get("select[id='systemUser_userType']").should("be.visible").select("Admin").should("have.value", "1");
    cy.get("input[id='systemUser_employeeName_empName']").should("be.visible").type("Franklyn{enter}");
    //cy.get("li > strong").click();
    cy.get("input[id='systemUser_userName']").should("be.visible").type("Franklynw");
    cy.get("select[id='systemUser_status']").select("Enabled").should("have.value", "1");
    cy.get("input[id='systemUser_password']").should("be.visible").type("admin456");
    cy.get("input[id='systemUser_confirmPassword']").should("be.visible").type("admin456");
    cy.get("input[id='btnSave']").should("be.visible").click();
    cy.get(".message").should("be.visible").should("contain", "Successfully Saved");
  
  });
  it('Alterar senha', () => {
    cy.paginaCadastrarAdmin();
    cy.get("input[id='searchSystemUser_employeeName_empName']").should("be.visible").type("Franklyn{enter}");
    cy.get("input[id='searchBtn']").should("be.visible").click();
    cy.get(".odd > :nth-child(2) > a").should("be.visible").should("contain", "Franklyn").click();
    cy.get("input[id='btnSave']").should("be.visible").should("have.value", "Edit").click();
    cy.get("input[id='systemUser_chkChangePassword']").should("be.visible").should("not.be.checked").check();
    cy.get("input[id='systemUser_password']").should("be.visible").type("admin123");
    cy.get("input[id='systemUser_confirmPassword']").should("be.visible").type("admin123");
    cy.get("input[id='btnSave']").should("be.visible").should("have.value", "Save").click();
    cy.get(".message").should("be.visible").should("contain", "Successfully Updated");
  });
});