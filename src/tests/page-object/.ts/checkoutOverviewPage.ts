import { Page, expect } from "playwright/test";

export class CheckoutOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkoutOverviewInformation() {
    await expect(this.page.locator(".cart_item")).toContainText(
      "Sauce Labs Backpack",
    );

    await expect(this.page.locator(".summary_info")).toContainText(
      "Payment Information:",
    );

    await expect(this.page.locator(".summary_info")).toContainText(
      "Shipping Information:",
    );

    await expect(this.page.locator(".summary_subtotal_label")).toBeVisible();

    await this.page.getByRole("button", { name: "Finish" }).click();
  }
}
