describe('Clicked movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .get('main')
    .get('article')
    .get(':nth-child(1) > .poster')
    .click()
  })
  it('should have a sample test', () => {
    expect(true).to.equal(true)
  });

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