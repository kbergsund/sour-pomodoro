describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  });

  it('should display the site header, containing name and background image', () => {
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
    .get(':nth-child(1) > .poster')
    .click()
    .get('.clicked-movie')
    .get(':nth-child(2) > .poster')
    .should('not.exist')
  })

})