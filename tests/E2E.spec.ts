import { test, expect } from '../fixtures/page.fixture';
import { USER_CREDENTIALS, CHECKOUT_DATA } from '../test-data/test.data';

test.describe('E2E - Purchase Flow', () => {
  test('Powinien pomyślnie przejść pełną ścieżkę zakupu produktów', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
  }) => {

    await test.step('1. Logowanie do serwisu Swag Labs', async () => {
      await loginPage.goto();
      await loginPage.login(
        USER_CREDENTIALS.standardUser.username,
        USER_CREDENTIALS.standardUser.password
      );
      await expect(page).toHaveURL(/.*inventory.html/);
      await expect(inventoryPage.pageTitle).toHaveText('Products');
    });

    await test.step('2. Dodanie produktów do koszyka i przejście do koszyka', async () => {
      await inventoryPage.addBackpackToCart();
      await inventoryPage.addBikeLightToCart();
      await expect(inventoryPage.shoppingCartBadge).toHaveText('2');
      await inventoryPage.goToCart();
      await expect(page).toHaveURL(/.*cart.html/);
    });

    await test.step('3. Weryfikacja zawartości koszyka i przejście do kasy', async () => {
      await expect(cartPage.cartItems).toHaveCount(2);
      await cartPage.checkout();
      await expect(page).toHaveURL(/.*checkout-step-one.html/);
    });

    await test.step('4. Wypełnienie danych adresowych kupującego', async () => {
      await checkoutStepOnePage.fillCheckoutInfo(
        CHECKOUT_DATA.firstName,
        CHECKOUT_DATA.lastName,
        CHECKOUT_DATA.postalCode
      );
      await expect(page).toHaveURL(/.*checkout-step-two.html/);
    });

    await test.step('5. Weryfikacja podsumowania i sfinalizowanie zamówienia', async () => {
      await expect(checkoutStepTwoPage.cartItems).toHaveCount(2);
      await expect(checkoutStepTwoPage.summaryTotal).toBeVisible();
      await checkoutStepTwoPage.finish();
      await expect(page).toHaveURL(/.*checkout-complete.html/);
    });

    await test.step('6. Potwierdzenie pomyślnego złożenia zamówienia', async () => {
      await expect(checkoutCompletePage.ponyExpressImage).toBeVisible();
      await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
      await expect(checkoutCompletePage.completeText).toContainText(
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
      );
      await expect(checkoutCompletePage.backHomeButton).toBeVisible();
    });
  });
});