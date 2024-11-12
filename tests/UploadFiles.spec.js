const{test, expect} =require('@playwright/test')


test('Upload files', async({page})=>{


await page.goto('https://practice.expandtesting.com/upload')

await page.waitForSelector('.form-control')
await page.locator('.form-control').setInputFiles('tests/UploadFiles/Azhati_Yelizhate_Resume.pdf')

await page.waitForTimeout(3000)

})


test.only('Upload Multiple files', async({page})=>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/Azhati_Yelizhate_Resume.pdf','tests/UploadFiles/Balati_Atigan_Resume.pdf'])


await page.waitForTimeout(3000)

expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Azhati_Yelizhate_Resume.pdf')
expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Balati_Atigan_Resume.pdf')

await page.waitForTimeout(3000)

//Remove all files

await page.locator('#filesToUpload').setInputFiles([])
await page.waitForTimeout(3000)


expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
await page.waitForTimeout(3000)
})