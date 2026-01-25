import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { ProductCatalog } from "../../page-objects/productCatalog";

test.describe("Product Catalog Page", () => {
  test.beforeEach(async ({ page }) => {
    const onFormSingInPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com");
    await onFormSingInPage.swagLabsSingInForm("standard_user", "secret_sauce");
  });

  test("Product catalog", async ({ page }) => {
    const inProductCatalogPage = new ProductCatalog(page);

    await inProductCatalogPage.productCatalogPage();
  });
});
