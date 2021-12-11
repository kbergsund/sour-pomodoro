describe('Errors', () => {
  it('should handle invalid URL errors', () => {
    cy.visit('http://localhost:3000/banana')
      .get('.movie-container')
      .get('.container')
      .get('.text-block').children()
      .contains('h1', '404-Invalid URL')
      .next().contains('p', 'Whoa...kinda spooky in here')
      .next().contains('p', 'Get me outta here!')
    cy.visit('http://localhost:3000/movies/banana')
      .get('.movie-container')
      .get('.container')
      .get('.text-block').children()
      .contains('h1', '404-Invalid URL')
      .next().contains('p', 'Whoa...kinda spooky in here')
      .next().contains('p', 'Get me outta here!')
  })

  it('should handle a 500-level error', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .contains('h2', 'A server error occured, super bummer. 😕 Try again later.')
  })
})


