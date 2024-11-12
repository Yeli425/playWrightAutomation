const {test,expect} = require('@playwright/test')


test('Handle boots Dorpdowns' , async ({page})=>{



await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

page.locator('.multiselect dropdown-toggle btn btn-default').click()

const options= await page.locator('ul>li label input')
await expect(options).toHaveCount(11)

for(let option of options){


    const value = await options.innerText()

    console.log(value)
}


})