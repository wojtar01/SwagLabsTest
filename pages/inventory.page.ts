class inventoryPage {
  constructor(private page: any) {}

  async addItemsToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}

export { inventoryPage };