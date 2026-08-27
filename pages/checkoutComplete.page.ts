import { Page, Locator, expect } from '@playwright/test';

export class CheckoutCompletePage {
  private readonly ponyExpressImage: Locator;
  private readonly completeHeader: Locator;
  private readonly completeText: Locator;

  constructor(private page: Page) {
    this.ponyExpressImage = this.page.locator('[data-test="pony-express"]');
    this.completeHeader = this.page.locator('[data-test="complete-header"]');
    this.completeText = this.page.locator('[data-test="complete-text"]');
  }

  async confirmSale() {
    await expect(this.ponyExpressImage).toBeVisible();
    await expect(this.completeHeader).toContainText('Thank you for your order!');
    await expect(this.completeText).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}