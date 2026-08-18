class cartPage {
  constructor(private page: any) {}

  async checkout() {
  await this.page.locator('[data-test="checkout"]').click();
  }
}

export { cartPage };