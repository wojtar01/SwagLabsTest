import { Page, Locator } from '@playwright/test';

export class CheckoutStepTwoPage {
  readonly finishButton: Locator;
  readonly cartItems: Locator;
  readonly summaryTotal: Locator;
  readonly pageTitle: Locator;

  constructor(private page: Page) {
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.cartItems = this.page.locator('[data-test="inventory-item"]');
    this.summaryTotal = this.page.locator('[data-test="total-label"]');
    this.pageTitle = this.page.locator('[data-test="title"]');
  }

  async finish() {
    await this.finishButton.click();
  }
}