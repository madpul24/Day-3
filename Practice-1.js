

describe('kumpulan test case', function(){
    
    it('tc-name-and-email', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Ahmad Saiful')
        cy.get('#et_pb_contact_email_0').type('ahmadsaiful@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    })
    it('tc-radio-button',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').check()
    })
    it('tc-checkbox',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').click()
    })
    it('tc-dropdownn-audi',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi')
    })
    it('tc-click-me',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
    })
})