/// <reference types="cypress" />

describe ('Filter Functionality' , function(){

    it('Filter by location' , function(){
        cy.visit('https://d28dp6fycxce58.cloudfront.net/')
        cy.get('.forms_selectWrapper__14V_D > .forms_defaultInput__3F6Ma').clcik
    })

    it('search by name' , function(){
        cy.visit('https://d28dp6fycxce58.cloudfront.net/')
        cy.get('input.forms_defaultInput__3F6Ma').type('Rick')
    })

    it('Add character to Favorite Tab' , function(){
        cy.visit('https://d28dp6fycxce58.cloudfront.net/')
        cy.get('input.forms_defaultInput__3F6Ma').type('Rick')
        cy.get('.CharacterList_root__3dgo- > .utility_textAccent__25rFx').click

    })
})