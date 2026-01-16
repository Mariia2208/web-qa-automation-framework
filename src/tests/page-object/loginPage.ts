import { Page } from "playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async swagLabsSingInForm(Username: string, password: string) {
    const userNameInput = this.page
      .locator(".login_container")
      .getByRole("textbox", { name: "Username" });
    const passwordInput = this.page
      .locator(".login_container")
      .getByRole("textbox", { name: "Password" });

    await userNameInput.fill(Username);
    await passwordInput.fill(password);

    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
