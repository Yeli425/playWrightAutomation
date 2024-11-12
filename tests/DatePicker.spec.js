const { test, spect} = require ('@playwright/test')


test("Date Picker", async ({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('#datepicker', '08/02/2024')



    //date picker
    const year = "2024"
    const date = "15"
    const month = "September"
    await page.click('#datepicker') //opens the calender

    while(true){
       const currentMonth= await page.locator('.ui-datepicker-month').textContent()
       const currentYear= await page.locator('.ui-datepicker-year').textContent()
    
       if(currentYear == year && currentMonth == month){
            break;

       }else{

        await page.locator('[title="Next"]').click()

       }

       const dates = await page.$$(".ui-state-default")

       //date selection using  loop
       for(const dt of dates){

        if(await dt.textContent()== date){
            await dt.click()
            break;
        }
       }
       
    }
    

//date selection - without loop

await page.click(`//a[@class='ui-state-default'][text()='${date}']`)



    await page.waitForTimeout(2000)
})