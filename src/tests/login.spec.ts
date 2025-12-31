import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("Login with valid credentials", async ({ page }) => {
  const userNameInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Username" });
  const passwordInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Password" });

  await userNameInput.fill("standard_user");
  await expect(userNameInput).toHaveValue("standard_user");

  await passwordInput.fill("secret_sauce");
  await expect(passwordInput).toHaveValue("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();
});
test("Login with invalid User Name and valid Password", async ({ page }) => {
  const userNameInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Username" });
  const passwordInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Password" });

  //fill with invalid User Name and valid Password
  await userNameInput.fill("standard_user1");
  await passwordInput.fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  const errorMessage = page.locator("[data-test='error']");
  await expect(errorMessage).toContainText(
    "Username and password do not match"
  );
});

test("Test with valid User Name and invalid Password", async ({ page }) => {
  const userNameInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Username" });
  const passwordInput = page
    .locator(".login_container")
    .getByRole("textbox", { name: "Password" });

  await userNameInput.fill("standard_user");
  await passwordInput.fill("secret_sauce1");
  await page.getByRole("button", { name: "Login" }).click();

  const errorMessage = page.locator("[data-test='error']");
  await expect(errorMessage).toContainText(
    "Username and password do not match"
  );
});
