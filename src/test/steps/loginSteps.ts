import { Given, When, Then ,Before,After} from '@cucumber/cucumber';

import {pageFixture} from '../utiles/pageFixture'
import LoginPage from '../pages/LoginPage'

let url = "https://www.saucedemo.com/";

const loginPage=new LoginPage();

Given("I am on the home page", async function () {
  await pageFixture.page.goto(url);
});

Given(/^I enter valid "([^"]*)" and "([^"]*)"$/, async function (username:string,password:string) {
  await loginPage.enterUserData(username,password);
});

When("I click on the login button", async function () {
  await loginPage.clickLoginButton()
});

Then("I should be logged in successfully", async function () {
  await loginPage.verifyLoginSuccessfull()
});

Then('I should see the following message {string}', async function (errorMessage:string) {
  await loginPage.verifyLoginErrorMessage(errorMessage)

});