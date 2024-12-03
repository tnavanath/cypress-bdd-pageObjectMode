//Locators
const firstname = '[id="firstname"]'
const lastname = '[id="lastname"]'
const email_address = '[id="email_address"]'
const password = '[id="password"]'
const passwordConfirmation = '[id="password-confirmation"]'
const createAnAccount = 'button[class="action submit primary"]'
const emailIdSignIn = '[id="email"]'
const passwrdSignIn = '[name="login[password]"]'
const signIn = 'button[class="action login primary"]'

class CreateAccntPage {


    static fillFirstName(strFirstName) {
        cy.typeInEditBox(firstname, strFirstName, true)

    }

    static fillLastName(strlasttName) {
        cy.typeInEditBox(lastname, strlasttName)

    }

    static fillEmailId(strEmailAddress) {
        const randomNumber = Math. floor(Math. random() * 100) + 1
        console.log(strEmailAddress+randomNumber+"@gmail.com")
        cy.typeInEditBox(email_address, strEmailAddress+randomNumber+"@gmail.com")

    }

    static fillpassword(strPassword) {
        cy.typeInEditBox(password, strPassword)

    }

    static fillConfirmPassword(strPassword) {
        cy.typeInEditBox(passwordConfirmation, strPassword)

    }

    static fillUserID(strID) {
        cy.typeInEditBox(emailIdSignIn, strID)

    }

    static fillPasswordSignIn(strPassword) {
        cy.typeInEditBox(passwrdSignIn, strPassword)

    }

    static clickOnCreateAnAccnt() {

        cy.clickButton(createAnAccount, true)

    }

    static clickOnSignIn() {

        cy.clickButton(signIn)
        
    }

    static verifyAccntCretion() {
        cy.get('body div.page.messages').should('be.visible').then(($errorMessage) => {
            if ($errorMessage.text().includes('There is already an account with this email address. If you are sure that it is your email address,')) {
                cy.log('**An account with these details already exists. Please retrieve your password to log in or use different mandatory details to create a new account.**')
            } else {
                if ($errorMessage.text().includes('Thank you for registering with Main Website Store.')) {
                    cy.log('**Your account has been successfully created. Please log in using the credentials you just created.**')
                }
            }
        })

    }
}

export default CreateAccntPage;