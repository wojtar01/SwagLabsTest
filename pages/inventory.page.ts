import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly backpackAddToCart: Locator;
  readonly bikeLightAddToCart: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;
  readonly pageTitle: Locator;

  constructor(private page: Page) {
    this.backpackAddToCart = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikeLightAddToCart = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    this.pageTitle = this.page.locator('[data-test="title"]');
  }

  async addBackpackToCart() {
    await this.backpackAddToCart.click();
  }

  async addBikeLightToCart() {
    await this.bikeLightAddToCart.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async addItemsToCart() {
    await this.addBackpackToCart();
    await this.addBikeLightToCart();
    await this.goToCart();
  }
}