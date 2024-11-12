const {test,expect} = require('@playwright/test')


test('DropDown Test',async ({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')

//multiple ways to select option from the dorpdown


await page.locator('#country').selectOption({label:'Japan'}) //label / visible text
await page.locator('#country').selectOption('Japan')   //visible text
await page.locator('#country').selectOption({value:'Japan'}) //by value
await page.locator('#country').selectOption({indev:6}) //by index
await page.selectOption('#country','Japan')  //by direactly calling text

await page.waitForTimeout(5000)

//Assertions

//1 check number of options in dropdown

const options = await page.locator('#country option')
await expect(options).toHaveCount(10)


//2 check in array format

    const optionsArray = await page.$$('#country option')
    console.log('number of options: '+ optionsArray.length)
    await expect(optionsArray.length).toBe(10)



//3 check present of the value in dropdown
const content = await page.locator('#country').textContent()
await expect(content.includes('Japan')).toBeTruthy()



//4 check present of the value in dropdown using looping

const optionsArray2 = await page.$$('#country option')
let status = false;

for(const option of optionsArray2){

   let value =await option.textContent()
   
if(value.includes('Japan')){

    status=true;
    break;
}
}

expect(status).toBeTruthy()






})