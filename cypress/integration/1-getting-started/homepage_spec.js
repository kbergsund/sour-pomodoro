describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies:
          [
            {
              id: 694919,
              poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            },
            {
              id: 337401,
              poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
              }
          ]
      }
    })
      .visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  });

  it('should display the site header, containing name and background image', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('header')
      .should('have.css', 'background')
      .and('include', 'linear-gradient')
      .and('include', 'url')
      .get('h1')
      .contains('sour pomodoro')
  });

  it('should display movie posters inside MovieContainer', () => {
    cy.get('main')
      .get('article')
      .get('img')
  });

  it('should display individual movie details upon click of image', () => {
    cy.get('main')
      .get('article')
      .get(':nth-child(1) > a > .poster')
      .click()
      .get('.clicked-movie')
      .get(':nth-child(2) > a > .poster')
      .should('not.exist')
  })
})
