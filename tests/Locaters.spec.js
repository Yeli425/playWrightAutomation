//const {test, expect} = require('@playwright/test')

import{test, expect} from '@playwright/test'

test('Locaters', async ({page})=>{

await page.goto('https://demoblaze.com/')

await page.click('id=login2')
await page.locator('#loginusername').fill('pavanol')
await page.fill('#loginpassword','test@123')
await page.click("button[onclick='logIn()']")
const logoutLink = await page.locator('#logout2')

await expect(logoutLink).toBeVisible()

await page.close()



})