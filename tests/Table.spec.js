const {test, expect} =require ('@playwright/test')



test('handling table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   const table = await page.locator('#productTable')

    // total number of rows and columns

   const columns = await table.locator('thead tr th')
   console.log('number of columns ', await columns.count())

    const rows = await table.locator('tbody tr')
    console.log('number of rows', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)


    // select check box for product 4

//   const  matchedRow= rows.filter({
//         has: page.locator('td'),
//         hasText: 'Product 4'

//     })

//     matchedRow.locator('input').check()


await page.waitForTimeout(3000)

// select multiple products by re-suable fuction

await selectProduct(rows, page, 'Product 1')
await selectProduct(rows, page, 'Product 2')


await page.waitForTimeout(3000)


// print all the product details

for( let i=0; i<await rows.count(); i++){

    const currentRow= rows.nth(i)
    const currenttColumns = currentRow.locator('td')

for(let j=0; j< await currenttColumns.count()-1; j++){

   console.log( await currenttColumns.nth(j).textContent() )
}

}

// read data from all the pages
const pages = await page.locator('.pagination li a')

console.log('number of pages in the table ', await pages.count())

for(let p = 0; p< await pages.count(); p++){

    if(p>0){

        await pages.nth(p).click()
    }

    for( let i=0; i<await rows.count(); i++){

        const currentRow= rows.nth(i)
        const currenttColumns = currentRow.locator('td')
    
    for(let j=0; j< await currenttColumns.count()-1; j++){
    
       console.log( await currenttColumns.nth(j).textContent() )
    }
    
    }
    await page.waitForTimeout(3000)

}


})
async function selectProduct(rows, page, name){

    const  matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: name

    })

    await matchedRow.locator('input').check()

}