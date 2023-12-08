import { expect, type Locator, type Page } from '@playwright/test';
// import { getBaseUrl, getCredentials}  from '../config/config.ts';
import { ConfigENV } from '../config/ConfigENV';

export class LoginPage {
    private readonly page: Page;
    private readonly fieldUserName: Locator;
    private readonly fieldPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly headerText: Locator;

    constructor(page: Page){
        this.page = page;
        this.fieldUserName = page.locator('#user-name');
        this.fieldPassword = page.locator('#password');
        this.buttonLogin = page.locator('#login-button');
        this.headerText = page.locator('css=.app_logo >> text=Swag Labs');
    }

    async gotoLoginPage() {
        console.log(ConfigENV.urlEnvironmentQA)
        await this.page.goto(ConfigENV.urlEnvironmentQA);
        await expect(this.page).toHaveTitle('Swag Labs');
    }

    async fillUserAndPassword(){
        // const { username, password } = getCredentials();
        console.log(ConfigENV.userName)
        console.log(ConfigENV.password)
        await this.fieldUserName.fill(ConfigENV.userName);
        await this.fieldPassword.fill(ConfigENV.password);
    }

    async clickButtonLogin(){
        await this.buttonLogin.click();
    }

    async validateHomePage(){
        await expect(this.headerText).toBeVisible()
    }
}