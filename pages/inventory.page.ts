import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private readonly backpackAddToCart: Locator;
  private readonly bikeLightAddToCart: Locator;
  private readonly shoppingCartLink: Locator;

  constructor(private page: Page) {
    this.backpackAddToCart = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikeLightAddToCart = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]');
  }

  async addItemsToCart() {
    await this.backpackAddToCart.click();
    await this.bikeLightAddToCart.click();
    await this.shoppingCartLink.click();
  }
}