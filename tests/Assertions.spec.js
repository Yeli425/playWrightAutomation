const {test,expect}=require('@playwright/test')
const exp = require('constants')


test('AssertionsTest', async ({page})=>{


    //open url
    await page.goto('https://www.nopcommerce.com/en/register')

    //check page has URL
   await  expect(page).toHaveURL('https://www.nopcommerce.com/en/register')



    //check page has title

    await expect(page).toHaveTitle('Register - nopCommerce')

    //check element is visible on the web page

    const logoElement = await page.locator('.desktop-logo')

    await expect(logoElement).toBeVisible()

    // check element is enabled or not

    const searchBox = await page.locator('#FirstName')

    await expect(searchBox).toBeEnabled()
    await expect(searchBox).toBeDisabled()

    // check radio button or checkbox is selected 

    const checkBox = await page.locator('#Newsletter')

    await checkBox.click()  //select the checkbox

    await expect(checkBox).toBeChecked()

    // check element has attribute

    const button = await page.locator('#check-availability-button')
    await expect(button).toHaveAttribute('type', 'button')


    //check emelent matches text 
    await expect(await page.locator('.page-title')).toHaveText('Register')

    //check element matches contains text
    await expect(await page.locator('.page-title')).toHaveText('ister')

    //check input has a value

    const emailInput= await page.locator('#Email')
    await emailInput.fill('elzatmozat@gmail.com')
    await expect(emailInput).toHaveValue('elzatmozat@gmail.com')


})