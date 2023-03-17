const { getForecastBgColor, colorOptions } = require("../../src/utils/bgColor")

describe('Main page', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
  })

  it('should visit main page', () => {
  })

  it('should render bing image', () => {
    cy.get('img.object-cover').should('be.visible')
  })

  it('should submit search on enter', () => {
    cy.get('input#search_input').type(`Rio de janeiro{enter}`)
    cy.get('.forecast-item-full').should('be.visible')
  })

  it('should submit search on button click', () => {
    cy.get('input#search_input').type(`Rio de janeiro`)
    cy.get('button[type=submit]').click()
    cy.get('.forecast-item-full').should('be.visible')
  })

  it('should reformat location name after submit', () => {
    cy.get('input#search_input').type(`rio de janeiro{enter}`)
    cy.get('input#search_input').invoke('val').should(formattedValue => {
      const expected = 'Rio de Janeiro, Rio de Janeiro'
      expect(formattedValue).to.equal(expected)
    })
  })

  it('should display forecast background color correctly', () => {
    cy.get('input#search_input').type(`anchorage{enter}`)

    cy.get('span#temp-0').invoke('text').then(temp => {
      const temperature = Number(temp)
      const bgColor = getForecastBgColor(temperature)
      const expectedBgColor = colorOptions[bgColor][0]
      cy.get('#forecast-item-0')
        .should('have.css', 'background-color')
        .and('eq', expectedBgColor)
    })

  })

  it('should display error toast after invalid search input', () => {
    cy.get('input#search_input').type(`oiuaysegrfvaniouwyergaieur{enter}`)
    cy.get('div[role=alert]')
  })

  it('should convert temperature unit on temperature click', () => {
    cy.get('input').type(`Rio de janeiro{enter}`)

    let celsiusValues;

    cy.get('span[data-testid=temp]').invoke('text').then(initialValues => {
      celsiusValues = initialValues
      cy.get('button[data-testid=temp-btn]').then(buttons => {
        cy.wrap(buttons[0]).click()

      })
      cy.get('span[data-testid=temp]').invoke('text').should(newValues => {
        expect(newValues).not.to.equal(initialValues)
      })
    })
    
    cy.wait(100)
    
    cy.get('span[data-testid=temp]').invoke('text').then(initialValues => {
      cy.get('button[data-testid=temp-btn]').then(buttons => {
        cy.wrap(buttons[0]).click()

      })
      cy.get('span[data-testid=temp]').invoke('text').should(newValues => {
        expect(newValues).not.to.equal(initialValues)
        expect(newValues).to.equal(celsiusValues)
      })
    })
  })
})