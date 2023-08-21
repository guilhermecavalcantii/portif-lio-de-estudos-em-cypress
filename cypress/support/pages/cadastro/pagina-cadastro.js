const el = require ('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.contains('a','Register now').click();
    }

    preencherFormulario(){
        cy.get('[data-test="email"]').type('user.email');
        cy.get('[data-test="fullName"]').type('user.fullName');
        cy.get('[data-test="registerUserName"]').type('user.UserName');
        cy.get('[data-test="registerPassword"]').type('user.Password');

    }

    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }

}

export default new Cadastro();