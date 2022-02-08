const SHOPPING_CART = '.shopping_cart_link';
const TITLE = '//span[text()="Products"]';

class ProductsPage{

    static verifyTitle(){

        cy.xpath(TITLE).should('be.visible');
    }

    static addProduct(product){

        cy.xpath(`//button[@id="add-to-cart-${product.toLowerCase().replace(/ /g, "-")}"]`)
        .click()
    }

    static clickShoppingCart(){

        cy.get(SHOPPING_CART).click();
    }
}

export default ProductsPage;