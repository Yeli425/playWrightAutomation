const {test,expect} = require('@playwright/test')


test('Handle Dorpdowns' , async ({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')


await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])


// Assertions check number of options in dorpdown
const options = await page.locator('#colors option')
await expect(options).toHaveCount(10)







})
