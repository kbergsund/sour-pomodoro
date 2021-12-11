describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies:
          [
            {
              title: 'Money Plane',
              average_rating: 6.625,
              release_date: "2020-09-29",
              id: 694919,
              poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            },
            {
              title: "Mulan",
              average_rating: 5.2727272727272725,
              release_date: "2020-09-04",
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

  it('should sort movie posters based on user interaction with dropdown', () => {
    cy.get('select').select('title')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')

    cy.get('select').select('title2')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')

    cy.get('select').select('average_rating')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')

    cy.get('select').select('average_rating2')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')

    cy.get('select').select('release_date')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')

    cy.get('select').select('release_date2')
    .get(':nth-child(1) > a > .poster').get('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })

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
  