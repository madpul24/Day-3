

describe('kumpulan test case', function(){
    
    it('tc-name-and-email', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Ahmad Saiful').should('have.value','Ahmad Saiful')
        cy.get('#et_pb_contact_email_0').type('ahmadsaiful@gmail.com').should('have.value','ahmadsaiful@gmail.com')
        cy.contains('Email Me!').click()
    })
    it('tc-radio-button',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[type="radio"]').first().check().should('have.value','male')
    })
    it('tc-checkbox',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[type="checkbox"]').check('Bike').should('have.value','Bike')
    })
    it('tc-dropdownn-audi',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi')
    })
    it('tc-click-me',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').should('have.text','Click Me').click()
        cy.get('.entry-title').contains('Button Success')
        cy.get('.formkit-close').should('not.be.visible')
        cy.get('.formkit-close').click({force: true})
    })
})
