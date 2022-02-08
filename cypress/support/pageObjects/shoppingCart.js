
class ShoppingCart{

    static verifyProduct(product){

        cy.get('.inventory_item_name')
        .contains(product)
        .should('be.visible')
    }
}

export default ShoppingCart;