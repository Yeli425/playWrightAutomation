const {test, expect} = require('@playwright/test')



test('frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

const allFrames= await page.frames()

console.log("total number of frames: "+allFrames.length)


//approach1: using name or url

//await page.frame('name') if name is present
const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

await frame1.fill("[name='mytext1']",'Hello')



//approach 2 - using frame locator

const inputBox= await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']")

await inputBox.fill('Hi')






})