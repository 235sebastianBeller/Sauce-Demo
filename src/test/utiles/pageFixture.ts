import { chromium, Page, Browser,BrowserContext } from '@playwright/test';

let page : Page;

export const pageFixture = {
    // @ts-ignore
    page:undefined as Page
}