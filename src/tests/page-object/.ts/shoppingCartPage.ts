import { Page, expect } from "playwright/test";

export class ShoppingCart {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async OpenShoppingCart() {
    await this.page.locator(".shopping_cart_link").click();
  }

  async verifyCartBadge(count: string) {
    const cartBadge = this.page.locator(".shopping_cart_badge");
    await expect(cartBadge).toHaveText(count);
  }
}
