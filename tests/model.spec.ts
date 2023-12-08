import { test, expect } from '@playwright/test'

test.describe('Feature: describes the name of the feature', () => {

  test('Scenario: scenario name description',async ({page}) => {
    await test.step('Given ...',async () => {
      //step code 
    });
    await test.step('When ...',async () => {
      //step code 
    });
    await test.step('And ...',async () => {
      //step code 
    });
    await test.step('Then ...',async () => {
      //step code 
    });
    await test.step('And ...',async () => {
      //step code 
    });
  });

});