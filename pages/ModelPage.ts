import { expect, type Locator, type Page } from '@playwright/test';

export class ModelPage {
    private readonly page: Page;
    //private readonly fieldUserName: Locator;

    constructor(page: Page){
        this.page = page;
        //this.fieldUserName = page.locator('#user-name');
    }

    async nameMethod(){
        //await this.fieldUserName.fill('standard_user');
    }
}