describe('Errors', () => {
  it('should be able to display a variety of error messages', () => {
    cy.visit('http://localhost:3000/banana')
      .get('.movie-container')
      .contains('p', 'Uhh, u lost? 404 - Invalid URL')
    cy.visit('http://localhost:3000/movies/banana')
      .get('.movie-container')
      .contains('p', 'Uhh, u lost? 404 - Invalid URL')
    })
})


