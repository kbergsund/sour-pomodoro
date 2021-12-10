describe('Errors', () => {
  it('should be able to display a variety of error messages', () => {
    cy.visit('http://localhost:3000/banana')
      .get('.movie-container')
      .contains('p', 'Uhh, u lost? 404 - Invalid URL')
    })

    it('should be able to catch a 500 level error', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v1/movies', {
      statusCode: 500,
    })
      .request({url:'https://rancid-tomatillos.herokuapp.com/api/v1/movies',failOnStatusCode: false})
      // .get('.movie-container')
      // .contains('h1', 'An unknown error occured, can\'t help ya there 🤷‍♀️')
    })
})