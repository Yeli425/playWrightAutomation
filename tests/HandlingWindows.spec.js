const {test, expect, chromium} = require('@playwright/test')


test('Handle pages/windows', async()=>{


const browser = await chromium.launch()
const context= await browser.newContext()

const page1 = await context.newPage()
const page2 = await context.newPage()


const allPages  = context.pages()
console.log("No of pages created:", allPages.length)


await page1.goto('https://www.orangehrm.com/')
await expect(page1).toHaveTitle('Human Resources Management Software | OrangeHRM')

await page2.goto('https://www.gamesci.com.cn')
await expect(page2).toHaveTitle('游戏科学 Game Science')


})


test.only('Handle multiple pages/windows', async()=>{


    const browser = await chromium.launch()
    const context= await browser.newContext()
    
    const page1 = await context.newPage()

    await page1.goto('https://www.gamesci.com.cn')
    await expect(page1).toHaveTitle('游戏科学 Game Science')
   
    const pagePromise = context.waitForEvent('page')
    await page1.locator('//a[@class="g-brd-around g-brd-1 g-brd-white g-color-white g-font-weight-500 g-font-size-14 g-line-height-1_2 g-py-7 g-px-10 g-mx-10"][contains(text(),"加入我们")]').click()

    const newPage = await pagePromise
    await expect(newPage).toHaveTitle('游戏科学招聘信息-游戏科学2024年招聘求职信息-拉勾招聘')


    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)


    await browser.close()
    })
    