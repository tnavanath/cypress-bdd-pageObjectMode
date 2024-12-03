

//Problem Statement
// 1. Go to https://www.goibibo.com/
// 2. In From - type - Ben
// 3. Select Bengaluru from the list.
// 4. Verify that the Bangluru is indeed selected 

//I have focused on only executing the scenario and not restructured 
//the code as per the best practices like define locators and storing the test data saeratelly 
//Whenever I will get time I will restructure the code as per the best practices

describe("goibibo website scenario", () => {

    it("goibibo website scenario test", () => {
        cy.visit('https://www.goibibo.com/');

        cy.get('span[class="sc-jlZhew inxprl"]').click()


        cy.get('p[class^=sc-12]').eq(0)
            .click()
            .get('input[type="text"]')
            .should('be.visible')
            .focus()
            .clear()
            .type('Ben')
        cy.get('[class="autoCompleteSubTitle"]').should('be.visible')

        cy.get('[class="autoCompleteSubTitle"]').each(($el, idex, $list) => {
            // cy.wrap($el).invoke('text').then((text) => {
            //     cy.log(text)
            // })
            if ($el.text().trim() === ('(BLR)')) {
                cy.wrap($el).scrollIntoView().click({ force: true });

            }

        })
        cy.get('p[class="sc-12foipm-4 czGBLf fswWidgetTitle"]')
            .eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('contain', 'Bengaluru');



    })
});

