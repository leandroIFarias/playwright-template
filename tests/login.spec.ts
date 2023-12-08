import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

test.describe('Feature: Login', () => {

  test('Scenario: Login successfully',async ({page}) => {

    const loginPage = new LoginPage(page)

    await test.step('Given access the test environment',async () => {
      await loginPage.gotoLoginPage() 
    });
    
    await test.step('When inform user and password',async () => {
      await loginPage.fillUserAndPassword()
    });

    await test.step('And click on the login button',async () => {
      await loginPage.clickButtonLogin() 
    });

    await test.step('Then I login successfully',async () => {
      await loginPage.validateHomePage()
    });

  });
  
});