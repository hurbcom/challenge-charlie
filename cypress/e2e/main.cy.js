describe('Main page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should visit main page', () => {
  })
  
  it('should render bing image', () => {
    cy.get('img.object-cover').should('be.visible')
  })

  it('should search and display weather forecast correctly', () => {
    cy.get('input').type(`Rio de janeiro{enter}`)
    cy.get('.forecast-item-full').should('be.visible')
  })
  
  it('should display error toast after invalid search input', () => {
    cy.get('input').type(`oiuaysegrfvaniouwyergaieur{enter}`)
    cy.get('div[role=alert]')
  })
  
  it('should submit search on button click', () => {
    cy.get('input').type(`Rio de janeiro`)
    cy.get('button[type=submit]').click()
    cy.get('.forecast-item-full').should('be.visible')
  })
  
  it('should convert temperature unit on temperature click', () => {
    cy.get('input').type(`Rio de janeiro{enter}`)

    cy.get('span[data-testid=temp]').invoke('text').then(initialValues => {
      cy.get('button[data-testid=temp-btn]').then(buttons => {
        cy.wrap(buttons[0]).click()

      })
      cy.get('span[data-testid=temp]').invoke('text').should(newValues => {
        expect(newValues).not.to.equal(initialValues)
      })
    })
    
  })
})