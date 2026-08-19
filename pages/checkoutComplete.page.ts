import { expect } from "@playwright/test";

class checkoutCompletePage {
  constructor(private page: any) {}

  async confirmSale() {
  await expect(this.page.locator('[data-test="pony-express"]')).toBeVisible();
  await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  await expect(this.page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}

export { checkoutCompletePage };