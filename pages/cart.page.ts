import { Page, Locator } from '@playwright/test';

export class CartPage {
  private readonly checkoutButton: Locator;

  constructor(private page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}