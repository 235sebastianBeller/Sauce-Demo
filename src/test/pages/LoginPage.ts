import {pageFixture} from "../utiles/pageFixture"
import {expect } from '@playwright/test';

export default class LoginPage{

    private elements={
        usernameLocator:"input[name='user-name']",
        passwordLocator:"input[name='password']",
        loginButtonLocator:"#login-button",
        errorMessageContainerLocator:'//*[@id="login_button_container"]/div/form/div[3]',

    }

    async enterUserName(username: string){
        await pageFixture.page.locator(this.elements.usernameLocator).fill(username); 
    }

    async enterPassword(password: string){
        await pageFixture.page.locator(this.elements.passwordLocator).fill(password);
    }

    async enterUserData(username:string,password:string){
        await this.enterUserName(username);
        await this.enterPassword(password);
    }
    
    async clickLoginButton(){
        await pageFixture.page.locator(this.elements.loginButtonLocator).click({
            timeout: 1000
          });
    }

    async verifyLoginErrorMessage(errorMessage:string){
        await expect(pageFixture.page.locator(this.elements.errorMessageContainerLocator)).toBeVisible();
        await expect(pageFixture.page.locator(`${this.elements.errorMessageContainerLocator}/h3`)).toContainText(errorMessage);
    }

    async verifyLoginSuccessfull(){
      expect(pageFixture.page.url()).toEqual("https://www.saucedemo.com/inventory.html");
    }

};