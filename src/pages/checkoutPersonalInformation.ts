import { Page } from "playwright/test";

export class CheckoutInformationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillOutTheInformation(
    FirstName: string,
    LastName: string,
    PostalCode: string,
  ) {
    const firstNameImput = this.page.getByRole("textbox", {
      name: "First Name",
    });
    const lastNameImput = this.page.getByRole("textbox", { name: "Last Name" });
    const postalCodeImput = this.page.getByRole("textbox", {
      name: "Zip/Postal Code",
    });

    await firstNameImput.fill(FirstName);
    await lastNameImput.fill(LastName);
    await postalCodeImput.fill(PostalCode);

    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}
