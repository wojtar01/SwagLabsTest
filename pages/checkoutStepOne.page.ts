class checkoutStepOnePage {
  constructor(private page: any) {}

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
  await this.page.locator('[data-test="firstName"]').fill(firstName);
  await this.page.locator('[data-test="lastName"]').fill(lastName);
  await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  await this.page.locator('[data-test="continue"]').click();
  }
}

export { checkoutStepOnePage };