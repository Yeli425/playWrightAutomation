const { test, expect} = require('@playwright/test')

test('Test1', async ({page})=>{


    await page.goto('https://www.gamesci.com.cn')
    await expect(page).toHaveTitle('游戏科学 Game Scienc')


})




test('Test2', async ({page})=>{

    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

})

