import { Page, Locator } from '@playwright/test';

export class CheckoutStepTwoPage {
  private readonly finishButton: Locator;

  constructor(private page: Page) {
    this.finishButton = this.page.locator('[data-test="finish"]');
  }

  async finish() {
    await this.finishButton.click();
  }
}