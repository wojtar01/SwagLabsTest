class checkoutStepTwoPage {
  constructor(private page: any) {}

  async finish() {
  await this.page.locator('[data-test="finish"]').click();
  }
}

export { checkoutStepTwoPage };