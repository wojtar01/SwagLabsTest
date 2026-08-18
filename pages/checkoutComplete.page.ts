import { expect } from "@playwright/test";

class checkoutCompletePage {
  constructor(private page: any) {}

  async confirmSale() {
  await expect(this.page.locator('[data-test="checkout-complete-header"]')).toHaveText('THANK YOU FOR YOUR ORDER');
  }
}

export { checkoutCompletePage };