describe('api-alurapic', () => {
    it('Dados da api', () => {
      cy.request({
        method:'POST',
        url:'https://alurapic-api.onrender.com/user/login',
        body: Cypress.env()
     }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.propety('id')
        expect(res.body.id).to.be.equal(48)
     })
    })
  })