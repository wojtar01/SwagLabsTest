import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;
  readonly pageTitle: Locator;

  constructor(private page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.cartItems = this.page.locator('[data-test="inventory-item"]');
    this.pageTitle = this.page.locator('[data-test="title"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}