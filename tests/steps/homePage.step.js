const{Given, When, Then, Before, After} = require('@cucumber/cucumber')

const{ chromium, expect} = require('@playwright/test')

const { Page } = require("playwright");

let page, broswer


Before(async function(){

    broswer = await chromium.launch()

    const context = await broswer.newContext()
    
    page = await context.newPage()

})


Given('User nevigate to the login page', async()=>{

    await page.goto('https://demoblaze.com')

    const LoginLink='#login2'

    await page.locator(LoginLink).click()
    
})


When('User enters login credentials and login', async()=>{

    const usernameInput='#loginusername'
    const passwordInput='#loginpassword'
    const loginBtn='(//button[normalize-space()="Log in"])[1]'

    await page.locator(usernameInput).fill('pavanol')
    await page.locator(passwordInput).fill('test@123')
    await page.locator(loginBtn).click()

})


Then('User should be able to login to home page successfully', async()=>{


    const nameOfUser = page.locator('#nameofuser')

    expect(nameOfUser).toHaveText('Welcome pavanol')





})