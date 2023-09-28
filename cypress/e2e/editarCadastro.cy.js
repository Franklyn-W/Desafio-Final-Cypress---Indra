describe('Manipular dados no cadastro de funcionario', () => {
    
    beforeEach('Acessar portal e realizar login', () => {
    
        cy.login("Admin", "admin123");
    
    });
    it('cadastrar usuario', () => {
        cy.cadastrarUsuario("Franklyn", "Winston", "Diniz", "cypress/fixtures/perfil.jpg");
    
    });
    it('Manipular dados cadastrais', () => {
        cy.listaFuncionarios();
        cy.get("input[id='empsearch_employee_name_empName']").should("be.visible").should("not.be.disabled").click().type("Franklyn");
        cy.get("input[id='searchBtn']").should("be.visible").should("not.be.disabled").click().should("not.be.disabled")
        cy.get(".odd > :nth-child(3) > a").should("contain", "Franklyn").should("be.visible").should("not.be.disabled").click();
        cy.get("#pdMainContainer").should("be.visible").should("not.be.disabled").should("contain", "Personal");
        cy.get("input[id='btnSave']").should("be.visible").should("not.be.disabled").should("have.value", "Edit").click();
        cy.get("input[id='personal_optGender_1']").should("be.visible").should("not.be.disabled").should("have.value", "1").check().should("be.checked");
        cy.get("select[id='personal_cmbMarital']").should("be.visible").should("not.be.disabled").select("Single").should("have.value", "Single");
        cy.get("select[id='personal_cmbNation']").should("be.visible").should("not.be.disabled").select("Brazilian").should("have.value", "26");
        cy.get("input[id='personal_DOB']").should("be.visible").should("not.be.disabled").type("{selectall}{backspace}").type("1993-05-10");
        cy.get("input[id='btnSave']").should("be.visible").should("not.be.disabled").should("have.value", "Save").click();
        cy.get(".message").should("be.visible").should("not.be.disabled").contains("Successfully Saved");
    });
    it('Definir cargo e dados do contrato', () => {
        
        cy.listaFuncionarios();
        cy.get("input[id='empsearch_employee_name_empName']").should("be.visible").should("not.be.disabled").click().type("Franklyn");
        cy.get("input[id='searchBtn']").should("be.visible").should("not.be.disabled").click();
        cy.get(".odd > :nth-child(3) > a").should("contain", "Franklyn").should("be.visible").should("not.be.disabled").click();
        cy.get("#pdMainContainer").should("be.visible").should("not.be.disabled").should("contain", "Personal");
        cy.get("#sidenav > :nth-child(6) > a").should("have.text", "Job").click();
        cy.get("input[id='btnSave']").should("be.visible").should("not.be.disabled").should("have.value", "Edit").click();
        cy.get("select[id='job_job_title']").should("be.visible").should("not.be.disabled").select("QA Engineer").should("have.value", "9");
        cy.get("select[id='job_emp_status']").should("be.visible").should("not.be.disabled").select("Full-Time Permanent").should("have.value", "3");
        cy.get("select[id='job_eeo_category']").should("be.visible").should("not.be.disabled").select("Officials and Managers").should("have.value", "1");
        cy.get("input[id='job_joined_date']").should("be.visible").should("not.be.disabled").clear().type("2022-08-15{enter}");
        cy.get("select[id='job_sub_unit']").should("be.visible").should("not.be.disabled").select("Quality Assurance").should("have.value", "5");
        cy.get("select[id='job_location']").should("be.visible").should("not.be.disabled").select("Canadian Regional HQ").should("have.value", "3");
        cy.get("input[id='btnSave']").should("be.visible").should("not.be.disabled").should("have.value", "Save").click();
        cy.get(".message").should("be.visible").should("not.be.disabled").should("contain", "Successfully Updated");
    });
});