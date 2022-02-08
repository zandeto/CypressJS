const URL = 'https://www.saucedemo.com/';
const USERNAME = '//input[@id="user-name"]';
const PASSWORD = '//input[@id="password"]';
const LOGINBUTTON = '//input[@id="login-button"]';


class LoginPage{
    static open(){
        cy.visit(URL);
    }

    static fillUserName(){

        cy.fixture('credentials').then(credentials=>{
            cy.xpath(USERNAME).type(credentials.standardUser)
    });
    }

    static fillPassword(){

        cy.fixture('credentials').then(credentials=>{
            cy.xpath(PASSWORD).type(credentials.password);
    });
    }

    static submit(){
        cy.xpath(LOGINBUTTON).click();
    }
}

export default LoginPage;