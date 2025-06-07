export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminTab = page.locator('a:has-text("Admin")');
    this.addUserButton = page.locator('button:has-text("Add")');
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.confirmPasswordField = page.locator('input[placeholder="Confirm Password"]');
    this.saveButton = page.locator('button:has-text("Save")');
    this.searchInput = page.locator('label:has-text("Username") >> .. >> input');
    this.searchButton = page.locator('button:has-text("Search")');
    this.deleteIcon = page.locator('i.bi-trash');
    this.confirmDelete = page.locator('button:has-text("Yes, Delete")');
    this.editIcon = page.locator('i.bi-pencil-fill');
    this.validationMessages = page.locator('.oxd-input-group__message');
  }

  async navigateToAdminModule() {
    await this.adminTab.click();
  }

  async addUser(username, password) {
    await this.addUserButton.click();
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.saveButton.click();
  }

  async searchUser(username) {
    await this.searchInput.fill(username);
    await this.searchButton.click();
  }

  async deleteUser() {
    await this.deleteIcon.first().click();
    await this.confirmDelete.click();
  }

  async updateUser(newUsername) {
    await this.editIcon.first().click();
    await this.usernameField.fill(newUsername);
    await this.saveButton.click();
  }
}
