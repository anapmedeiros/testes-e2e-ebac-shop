/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
    cy.visit('minha-conta')
});

it('Deve colocar 4 prutos no carrinho', () => {
    cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()
cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Red', '4')
cy.get('.woocommerce-message').should('contain', '4 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
cy.get('.woocommerce-message > .button').click()
cy.get('.checkout-button').click()

describe('Funcionalidade endereço', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
    })

});


    it('Deve fazer o cadastro do endereço com sucesso', () => {
        EnderecoPage.editarEndereco()
    
    });

    
});

})