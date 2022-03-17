/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha conta/')

    });

    it('Deve acessar a loja EBAC SHOP e fazer login', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()
    cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(4)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '4')
    cy.get('.woocommerce-message').should('contain' , '4 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

    cy.get('#billing_first_name').clear().type('Ana')
cy.get('#billing_last_name').clear().type('Medeiros')
cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
cy.get('#billing_address_1').clear().type('Rua Pernambucana')
cy.get('#billing_address_2').clear().type('200')
cy.get('#billing_city').clear().type('Osasco')
cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
cy.get('#billing_postcode').clear().type('02023-980')
cy.get('#billing_phone').clear().type('11654789632')
cy.get('#billing_email').clear().type('anapmedeiros@gmail.com.br')
cy.get('#payment_method_cod').click()
cy.get('#terms').click()
cy.get('#place_order').click()


    

    });


})