import Login from '../login/page-login.js'
import { ELEMENTS } from './elements.js'

const elm = ELEMENTS;

class Carrinho {
    acessarPaginaDeProdutos(){
        Login.acessarPaginaLogin();
        Login.realizarLoginComDadosValidos();
    }

    adicionarUmItemNoCarrinho(){
        cy.xpath(elm.primeiroProduto).click()
        cy.xpath(elm.btnAddtoCartTelaProduto)
            .should('be.visible')
            .click()
        cy.xpath(elm.numeroElementosCarrinho).should('be.visible')
    }

    adicionarTodosItensNoCarrinho(){
        for (let index = 0; index <= 5; index++) {
           cy.xpath(`(//div[@data-test="inventory-item-name"])[${index+1}]`).click()
           cy.xpath(elm.btnAddtoCartTelaProduto)
            .should('be.visible')
            .click()
           cy.xpath(`//span[@data-test="shopping-cart-badge"][. = "${index+1}"]`).should('be.visible')
           cy.xpath(elm.btnBackToProducts).click()
        }
    }

    adicionarItemNoCarrinhoTelaProdutos(){
        cy.xpath(elm.btnAddToCartTelaProdutos).click()
        cy.xpath(elm.numeroElementosCarrinho).should('be.visible')
    }

    removerItemViaTelaProduto(){
        this.adicionarUmItemNoCarrinho();
        cy.xpath(elm.btnRemove)
            .should('be.visible')
            .click();
        cy.xpath(elm.btnAddtoCartTelaProduto).should('be.visible')
        cy.xpath(elm.numeroElementosCarrinho).should('not.exist')
    }

    removerItemViaTelaProdutos(){
        this.adicionarItemNoCarrinhoTelaProdutos();
        cy.xpath(elm.btnRemove)
            .should('be.visible')
            .click();
        cy.xpath(elm.btnAddToCartTelaProdutos).should('be.visible')
        cy.xpath(elm.numeroElementosCarrinho).should('not.exist')
    }

}

export default new Carrinho();