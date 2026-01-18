import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
});

test("Open product details from catalog", async ({ page }) => {
  const product = page
    .locator(".inventory_item_name")
    .filter({ hasText: "Sauce Labs Backpack" })
    .click();

  await expect(page.locator(".inventory_details_name")).toHaveText(
    "Sauce Labs Backpack",
  );

  const backButton = page.getByRole("button", { name: "Back to products" });
  await backButton.click();
});
