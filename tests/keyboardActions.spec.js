const{test, expect} = require('@playwright/test')



test('keyboard Action', async({page})=>{

await page.goto('https://gotranscript.com/text-compare')

//await page.locator('name="text1"').fill("hello")
await page.type('[name="text1"]','hello')

//Ctrl + A -- select the while text
await page.keyboard.press('Meta+A')

//Ctrl + C  -- copy the text
await page.keyboard.press('Meta+C')

// Tab
await page.keyboard.down('Tab')

//Ctrl + V
await page.keyboard.press('Meta+V')
await page.waitForTimeout(3000)


})