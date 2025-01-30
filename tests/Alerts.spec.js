const {test,expect } = require('@playwright/test')



test('Alert with OK', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')


    // enabling alart handling
    page.on('dialog', async dialog =>{
    
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.click('//button[normalize-space()="Alert"]')
    await page .waitForTimeout(3000)



})



test('Alert with confirmation Dialog-Alert ', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')


    // enabling Dialog window  handling
    page.on('dialog', async dialog =>{
    
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()

    })

    await page.click('//button[normalize-space()="Confirm Box"]')
    await expect(page.locator(' //p[@id="demo"]')).toHaveText('You pressed Cancel!')
    await page .waitForTimeout(3000)

})


test('Alert with Prompted Dialog ', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')


    // enabling Dialog window  handling
    page.on('dialog', async dialog =>{
    
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Elzat') 

    })

    await page.click('//button[normalize-space()="Prompt"]')
    await expect(page.locator(' //p[@id="demo"]')).toHaveText('Hello Elzat! How are you today?')
    await page .waitForTimeout(3000)

})