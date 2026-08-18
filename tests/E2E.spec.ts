import { test, expect } from '@playwright/test';
import { loginPage} from '../pages/login.page';
import { inventoryPage } from '../pages/inventory.page';
import { cartPage } from '../pages/cart.page.ts';
import { checkoutStepOnePage } from '../pages/checkoutStepOne.page';
import { checkoutStepTwoPage } from '../pages/checkoutStepTwo.page';
import { login, password,firstName ,lastName ,postalCode } from '../test-data/test.data';

test('E2E Test', async ({ page }) => {

  const LoginPage = new loginPage(page);
  await LoginPage.login(login, password);

  const InventoryPage = new inventoryPage(page);
  await InventoryPage.addItemsToCart();
  
  const CartPage = new cartPage(page);
  await CartPage.checkout();
  
  const CheckoutStepOnePage = new checkoutStepOnePage(page);
  await CheckoutStepOnePage.fillCheckoutInfo(firstName, lastName, postalCode);

  const CheckoutStepTwoPage = new checkoutStepTwoPage(page);
  await CheckoutStepTwoPage.finish();
});