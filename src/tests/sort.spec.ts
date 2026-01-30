import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
});

test("Sort by Name A to Z", async ({ page }) => {
  const itemNameAtoZ = await page
    .locator("inventory_item_name ")
    .allTextContents();
  console.log(itemNameAtoZ);

  const sortedNamesAtoZ = [...itemNameAtoZ].sort((a, b) => a.localeCompare(b));
  console.log(sortedNamesAtoZ);

  expect(itemNameAtoZ).toEqual(sortedNamesAtoZ);
});

test("Sort by Name Z to A", async ({ page }) => {
  await page.selectOption(".product_sort_container", { value: "za" });
  const itemNameZtoA = await page
    .locator("inventory_item_name ")
    .allTextContents();
  console.log(itemNameZtoA);

  const sortedNamesZtoA = [...itemNameZtoA].sort((a, b) => b.localeCompare(a));
  console.log(sortedNamesZtoA);

  expect(itemNameZtoA).toEqual(sortedNamesZtoA);
});

test("Sort by Price Low to Hight ", async ({ page }) => {
  await page.selectOption(".product_sort_container", { value: "lohi" });
  const priceHightToLow = await page
    .locator("inventory_item_price ")
    .allTextContents();
  console.log(priceHightToLow);

  const numericPricesHightToLow = priceHightToLow.map((price) =>
    parseFloat(price.replace(/[^0-9.]+/g, "")),
  );
  console.log(numericPricesHightToLow);

  const sortedPriceHightToLow = [...numericPricesHightToLow].sort(
    (a, b) => a - b,
  );
  expect(numericPricesHightToLow).toEqual(sortedPriceHightToLow);
});

test("Sort by Price Hight to Low ", async ({ page }) => {
  await page.selectOption(".product_sort_container", { value: "hilo" });
  const priceLowToHight = await page
    .locator("inventory_item_price ")
    .allTextContents();
  console.log(priceLowToHight);

  const numericPricesLowToHight = priceLowToHight.map((price) =>
    parseFloat(price.replace(/[^0-9.]+/g, "")),
  );
  console.log(numericPricesLowToHight);

  const sortedPriceLowToHight = [...numericPricesLowToHight].sort(
    (a, b) => a - b,
  );
  expect(numericPricesLowToHight).toEqual(sortedPriceLowToHight);
});
