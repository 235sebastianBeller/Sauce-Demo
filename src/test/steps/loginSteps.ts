import { Given, When, Then ,Before,After} from '@cucumber/cucumber';
import { chromium, Page, Browser,expect } from '@playwright/test';
import {pageFixture} from '../utiles/pageFixture'

let url = "https://www.saucedemo.com/";


Given("I am on the home page", async function () {
  await pageFixture.page.goto(url);
});

Given(/^I enter valid "([^"]*)" and "([^"]*)"$/, async function (username:string,password:string) {
  await pageFixture.page.fill("input[name='user-name']", username);
  await pageFixture.page.fill("input[name='password']", password);
});

When("I click on the login button", async function () {
  await pageFixture.page.locator("#login-button").click({
    timeout: 2000
  });
});

Then("I should be logged in successfully", async function () {
  expect(pageFixture.page.url()).toEqual("https://www.saucedemo.com/inventory.html");
});

Then('I should see the following message {string}', async function (errorMessage:string) {
  await expect(pageFixture.page.locator('//*[@id="login_button_container"]/div/form/div[3]')).toBeVisible();
  await expect(pageFixture.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toContainText(errorMessage);
});