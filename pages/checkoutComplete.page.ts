import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
  readonly ponyExpressImage: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;

  constructor(private page: Page) {
    this.ponyExpressImage = this.page.locator('[data-test="pony-express"]');
    this.completeHeader = this.page.locator('[data-test="complete-header"]');
    this.completeText = this.page.locator('[data-test="complete-text"]');
    this.backHomeButton = this.page.locator('[data-test="back-to-products"]');
  }
}