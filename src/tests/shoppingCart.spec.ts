import { test, expect } from "@playwright/test";
// cd web-qa-automation-framework

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
});

test("Add product to cart from products page", async ({ page }) => {
  const product = page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Backpack" });

  const button = product.getByRole("button");

  await button.click();
  await expect(button).toHaveText("Remove", { timeout: 2000 });

  const cartBadge = page.locator(".shopping_cart_badge");
  await expect(cartBadge).toHaveText("1");
});

test.only("Remove product from Shoping Cart", async ({ page }) => {
  const product = page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Backpack" });

  const button = product.getByRole("button");

  await button.click();

  await page.locator(".shopping_cart_container").click();

  await expect(page.locator(".title")).toHaveText("Your Cart");

  const cartItem = page
    .locator(".cart_item")
    .filter({ hasText: "Sauce Labs Backpack" });

  const removeButton = cartItem.getByRole("button", { name: "Remove" });
  await removeButton.click();

  const cartBadge = page.locator(".shopping_cart_badge");
  await expect(cartBadge).toHaveCount(0);
});

test("Checkout", async ({ page }) => {
  await expect(page.locator(".title")).toHaveText("Your Cart");
  await expect(page.locator(".cart_item_label")).toHaveText(
    "Sauce Labs Backpack"
  );
  await page.locator("#checkout").click();
});
