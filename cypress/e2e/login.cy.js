describe('Página de login', () => {
  
  beforeEach(() => {
    cy.visit('site especifico.')})
    
    
    it('Preencher os campos do login correntamente para realizar login', () => {
      cy.Entrar('login','senha');
     
      
      cy.get('[data-placeholder="Insira seu email"]').type('email')
      
      cy.get('[data-placeholder="Insira sua senha"]').type('senha')
      
      cy.contains('Entrar').click();
    })
  })