class loginPage {
  constructor(private page: any) {}

  async login(login: string, password: string) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('[data-test="username"]').fill(login);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
}

export { loginPage };