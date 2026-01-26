import { test } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { ProductDetails } from "../../page-objects/productDetails";
import { ShoppingCart } from "../../page-objects/shoppingCartPOM";
import { CheckoutInformationPage } from "../../page-objects/checkoutFillInformation";
import { CheckoutOverviewPage } from "../../page-objects/checkoutOverview";

test("Add product and open shopping cart", async ({ page }) => {
  const onFormSingInPage = new LoginPage(page);
  const inProductDetailsPage = new ProductDetails(page);
  const shoppingCartPage = new ShoppingCart(page);
  const inCheckoutInformationPage = new CheckoutInformationPage(page);
  const inCheckoutOverviewPage = new CheckoutOverviewPage(page);

  await page.goto("https://www.saucedemo.com");
  await onFormSingInPage.swagLabsSingInForm("standard_user", "secret_sauce");

  await inProductDetailsPage.openProductDetails();
  await inProductDetailsPage.addProductToCart();

  await shoppingCartPage.verifyCartBadge("1");
  await shoppingCartPage.OpenShoppingCart();

  await shoppingCartPage.verifyProduct();
  await shoppingCartPage.checkoutButtonPersonalInformation();

  await inCheckoutInformationPage.fillOutTheInformation(
    "Mariia",
    "Pron",
    "L2E 6E8",
  );

  await inCheckoutOverviewPage.checkoutOverviewInformation();
});
