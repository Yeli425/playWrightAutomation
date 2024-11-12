const {test, expect} = require('@playwright/test')


test('Mouse Actions', async ({page})=>{


await page.goto('https://demo.opencart.com/')

 const desktop = await page.locator('(//a[normalize-space()="Desktops"])[1]')
const mac = await page.locator('//a[normalize-space()="Mac (1)"]')


//mouse hover
await desktop.hover()
await mac.hover()

await page.waitForTimeout(3000)



//mouse right click

await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

const button = await page.locator('//span[@class="context-menu-one btn btn-neutral"]')

await button.click({button:'right'})

await page.waitForTimeout(3000)



// double click

await page.goto('https://testautomationpractice.blogspot.com/')

 const copyTextButton = page.locator('(//button[normalize-space()="Copy Text"])[1]')

 await copyTextButton.dblclick()

 const f2  = page.locator('#field2')

 await expect(f2).toHaveValue('Hello World!')
 await page.waitForTimeout(3000)


// dragAndDrop

await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

const Seoul = page.locator('#box5')
const SouthKorea = page.locator('#box105')

//Approach 1
await Seoul.hover()
await page.mouse.down()

await SouthKorea.hover()
await page.mouse.up()

await page.waitForTimeout(3000)

//Apporach2

await Seoul.dragTo(SouthKorea)
await page.waitForTimeout(3000)



})