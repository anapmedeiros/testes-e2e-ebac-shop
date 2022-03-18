/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'

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