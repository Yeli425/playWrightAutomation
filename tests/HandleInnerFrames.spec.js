const {test, expect} = require('@playwright/test')


test('Inner Frames', async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    
    frame3.locator('input[name="mytext3"]').fill('welcome')



    //Nested frame
    const childFrames = await frame3.childFrames()

    await childFrames[0].locator("div[id='i5'] div[class='vd3tt']").check()



    await page.waitForTimeout(3000)




})