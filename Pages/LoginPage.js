exports.LoginPage = class LoginPage{

constructor(page){
    this.page=page
    this.LoginLink='#login2'
    this.usernameInput='#loginusername'
    this.passwordInput='#loginpassword'
    this.loginBtn='(//button[normalize-space()="Log in"])[1]'
}

async gotoLoginPage(){

    await this.page.goto('https://demoblaze.com')
}


async login(username, password){
await this.page.locator(this.LoginLink).click()
await this.page.locator(this.usernameInput).fill(username)
await this.page.locator(this.passwordInput).fill(password)
await this.page.locator(this.loginBtn).click()

}
}