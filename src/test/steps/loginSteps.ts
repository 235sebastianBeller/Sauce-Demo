import { Given, When, Then ,Before,After} from '@cucumber/cucumber';
import { chromium, Page, Browser,expect } from '@playwright/test';

let browser:Browser;
let page:Page;
let url = "https://www.saucedemo.com/";

//Antes de cada escenario
Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  this.browser=browser;
  this.page = page; 
});


//Después de cada escenario
After(async function () {
  await this.page.close();
  await this.browser.close();
});

Given("I am on the home page", async function () {
  await page.goto(url);
});

Given(/^I enter valid "([^"]*)" and "([^"]*)"$/, async function (username:string,password:string) {
  await page.fill("input[name='user-name']", username);
  await page.fill("input[name='password']", password);
});

When("I click on the login button", async function () {
  await page.locator("#login-button").click({
    timeout: 2000
  });
});

Then("I should be logged in successfully", async function () {
  expect(page.url()).toEqual("https://www.saucedemo.com/inventory.html");
});

Then('I should see the following message {string}', async function (errorMessage:string) {
  await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]')).toBeVisible();
  await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toContainText(errorMessage);
});