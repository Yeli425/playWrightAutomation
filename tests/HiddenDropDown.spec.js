const {test,expect} = require('@playwright/test')

test('Hidden Dorpdowns' , async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')


const Username = await page.getByPlaceholder('Username').fill('Admin')
const Password = await page.getByPlaceholder('Password').fill('admin123')
const loginBtn= await page.getByRole('button', {type:'submit'}).click()

await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="PIM"]').click()

const dorpdownIcon = await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]').click()


await page .waitForTimeout(3000)

const listbox = await page.$$('//div[@role="listbox"]//span')


for(let option of listbox){


const jobtitle = await option.textContent()
if(jobtitle.includes('QA Engineer')){
    await option.click()
    break;
   
}
}
await page .waitForTimeout(3000)


})