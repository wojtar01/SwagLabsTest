import { test, expect } from '../fixtures/page.fixture';
import { USER_CREDENTIALS } from '../test-data/test.data';

test.describe('Autentykacja - Testy logowania', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('Powinien pomyślnie zalogować użytkownika przy poprawnych danych', async ({ page, loginPage, inventoryPage }) => {

    await loginPage.login(
      USER_CREDENTIALS.standardUser.username,
      USER_CREDENTIALS.standardUser.password
    );

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });

  test('Powinien wyświetlić błąd dla zablokowanego użytkownika', async ({ loginPage }) => {
    await loginPage.login(
      USER_CREDENTIALS.lockedOutUser.username,
      USER_CREDENTIALS.lockedOutUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });

  test('Powinien wyświetlić błąd przy niepoprawnym haśle', async ({ loginPage }) => {
    await loginPage.login(
      USER_CREDENTIALS.standardUser.username,
      'invalid_password'
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('Powinien wyświetlić błąd przy pustym formularzu logowania', async ({ loginPage }) => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
