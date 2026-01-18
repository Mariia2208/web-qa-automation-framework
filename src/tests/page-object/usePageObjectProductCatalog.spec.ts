import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
});

test("parametrized methods", async ({ page }) => {
  const onFormSingInPage = new LoginPage(page);

  await onFormSingInPage.swagLabsSingInForm("standard_user", "secret_sauce");
});
