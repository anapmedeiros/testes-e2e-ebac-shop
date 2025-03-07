/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    
    });
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
})
      
    });

    it('Deve acessar a loja EBAC SHOP e fazer login e concluir compra', () => {
      
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Red', '3')
        cy.get('.woocommerce-message').should('contain', '3 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        EnderecoPage.editarEndereco('Ana', 'Medeiros', 'Brasil', 'Rua pernambucana', '200', 'Osasco', 'São Paulo', '01254-963', '11965478965', 'anapmede@gmail.com')
    
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido recebido')
    
    });