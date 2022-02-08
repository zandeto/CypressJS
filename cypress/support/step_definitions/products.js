import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pageObjects/loginPage';
import ProductsPage from '../pageObjects/productsPage';
import ShoppingCart from '../pageObjects/shoppingCart'

let item;

Given('I login to site', () => {

    LoginPage.open();
    LoginPage.fillUserName();
    LoginPage.fillPassword();
    LoginPage.submit();
});

And('I add {string} to the cart', (product) => {

    ProductsPage.addProduct(product);
    item = product;
});

When('I open the cart', () => {

    ProductsPage.clickShoppingCart();
});

Then('I vefify the item is added to the cart', () => {

    ShoppingCart.verifyProduct(item);
})