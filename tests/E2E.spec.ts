import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutStepOnePage } from '../pages/checkoutStepOne.page';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwo.page';
import { CheckoutCompletePage } from '../pages/checkoutComplete.page';
import { login, password, firstName, lastName, postalCode } from '../test-data/test.data';

test('E2E Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(login, password);

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemsToCart();
  
  const cartPage = new CartPage(page);
  await cartPage.checkout();
  
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  await checkoutStepOnePage.fillCheckoutInfo(firstName, lastName, postalCode);

  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  await checkoutStepTwoPage.finish();

  const checkoutCompletePage = new CheckoutCompletePage(page);
  await checkoutCompletePage.confirmSale();
});