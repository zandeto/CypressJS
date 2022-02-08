import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pageObjects/loginPage';
import ProductsPage from '../pageObjects/productsPage'

Given ('I open login page', () => {
    LoginPage.open();
})

When('I enter credentials and press login button', ()=>{
        
    LoginPage.fillUserName();
    LoginPage.fillPassword();
    LoginPage.submit();
});

Then('I should see the products page', ()=>{
    
    ProductsPage.verifyTitle();

});