import { test, expect } from "@playwright/test";

test.describe("Checkout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("User can add product to cart", async ({ page }) => {
    const product = page
      .locator(".inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" });
    const addToCartButton = product.getByRole("button");
    await addToCartButton.click();
    await expect(addToCartButton).toHaveText("Remove", { timeout: 2000 });

    const cartBadge = page.locator(".shopping_cart_badge");
    await expect(cartBadge).toHaveText("1");
  });

  test("User can proceed to checkout page", async ({ page }) => {
    //Add product
    const product = page
      .locator(".inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" });
    await product.getByRole("button").click();

    // Go to cart
    await page.locator(".shopping_cart_container").click();
    await expect(page.locator(".title")).toHaveText("Your Cart");

    // Proceed to checkout
    await page.getByRole("button", { name: "Checkout" }).click();
    await expect(page.locator(".title")).toHaveText(
      "Checkout: Your Information"
    );
  });

  test("User can fill checkout information form", async ({ page }) => {
    //Add product and go to checkout
    const product = page
      .locator(".inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" });
    await product.getByRole("button").click();
    await page.locator(".shopping_cart_container").click();
    await page.getByRole("button", { name: "Checkout" }).click();

    // Fill form
    const firstName = page.getByRole("textbox", { name: "First Name" });
    const lastName = page.getByRole("textbox", { name: "Last Name" });
    const zipCode = page.getByRole("textbox", { name: "Zip/Postal Code" });

    await firstName.fill("Mariia");
    await lastName.fill("Automation");
    await zipCode.fill("L2Y6TR");

    await expect(firstName).toHaveValue("Mariia");
    await expect(lastName).toHaveValue("Automation");
    await expect(zipCode).toHaveValue("L2Y6TR");

    await page.getByRole("button", { name: "Continue" }).click();
  });

  test("Checkout Overview", async ({ page }) => {
    const product = page
      .locator(".inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" });
    await product.getByRole("button").click();

    await page.locator(".shopping_cart_container").click();
    await page.getByRole("button", { name: "Checkout" }).click();

    await page.getByRole("textbox", { name: "First Name" }).fill("Mariia");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Automation");
    await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("L2Y6TR");

    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page.locator(".title")).toHaveText("Checkout: Overview");

    await expect(page.locator(".cart_item")).toContainText(
      "Sauce Labs Backpack"
    );

    await expect(page.locator(".summary_info")).toContainText(
      "Payment Information:"
    );

    await expect(page.locator(".summary_info")).toContainText(
      "Shipping Information:"
    );

    await expect(page.locator(".summary_subtotal_label")).toBeVisible();

    await page.getByRole("button", { name: "Finish" }).click();
  });
});
