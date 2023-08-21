import Cadastro from '../support/pages/cadastro/pagina-cadastro'



describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

    const users = require ('../fixtures/users.json')
    users.forEach(users => {
      it('Preencher os campos do formulário para cadastrar um novo usuário', () => {
        
    
        // cy.contains('a','Register now').click();
        // cy.get('[data-test="email"]').type('user.email')
        // cy.get('[data-test="fullName"]').type('user.fullName')
        // cy.get('[data-test="registerUserName"]').type('user.UserName')
        // cy.get('[data-test="registerPassword"]').type('user.Password')
        // cy.get('[data-test="btnRegister"]').click();

        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherFormulario();
        Cadastro.submeterCadastro()
      });   
    
    
  })
})