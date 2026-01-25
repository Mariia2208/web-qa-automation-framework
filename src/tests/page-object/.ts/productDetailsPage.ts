import { Page, expect } from "playwright/test";

export class ProductDetails {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openProductDetails() {
    await this.page
      .locator(".inventory_item_name")
      .filter({ hasText: "Sauce Labs Backpack" })
      .click();
  }

  async addProductToCart() {
    const addToCartButton = this.page.getByRole("button", {
      name: "Add to cart",
    });
    await addToCartButton.click();

    const removeButton = this.page.getByRole("button", { name: "Remove" });
    await expect(removeButton).toBeVisible();
  }
}
