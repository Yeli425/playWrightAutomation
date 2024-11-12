const {test,expect} = require('@playwright/test')
import { log } from 'console'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { CartPage } from '../Pages/CrtPage'

test('test', async({page})=>{

//Login
const login = new LoginPage(page)

login.gotoLoginPage()
login.login('pavanol','test@123')
await page.waitForTimeout(3000)

//Home
const home = new HomePage(page)
await home.addProductToCart('Samsung galaxy s6')
await page.waitForTimeout(3000)
await home.goToCart()
await page.waitForTimeout(3000)


//Cart

const cart = new CartPage(page)
await page.waitForTimeout(3000)
const status = await cart.checkProductInCart('Samsung galaxy s6')
expect(await status).toBe(true)






})