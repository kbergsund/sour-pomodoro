describe('Clicked movie', () => {
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
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie:
            {
              id: 694919,
              title: "Money Plane",
              "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
              "release_date": "2020-09-29",
              overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
              budget: 0,
              revenue: 0,
              runtime: 82,
              tagline: "",
              "average_rating": 6.625
              }
      }
    })
    cy.visit('http://localhost:3000/')
    .get('main')
    .get('article')
    .get(':nth-child(1) > a > .poster')
    .click()
  })

  it('should have a URL that matches the ID of the clicked movie', () => {
    cy.url().should('eq', 'http://localhost:3000/movies/694919')
    cy.url().should('include', '/movies/694919')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  });

  it('should return to homepage upon clicking of x button', () => {
    cy.get('main')
    .get('button')
    .click()
    .get('.clicked-movie')
    .should('not.exist')
    .get(':nth-child(2) > a > .poster')
  })

  it('should contain the details of the clicked movie', () => {
    cy.get('.clicked-movie')
    .get('button')
    .contains('x')
    .get('section')
    .should('have.css', 'background-image', 'url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")')
    .get('div')
    .contains('h3', 'Money Plane')
    .get('div').children()
    .contains('Rating: 6.625')
    .next().contains('Release Year: 2020-09-29')
    .next().contains('Revenue: 0')
    .next().contains('Budget: 0')
    .next().contains('Runtime: 82')
    .next().contains('Tagline:')
    .next().contains("Overview: A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })
})