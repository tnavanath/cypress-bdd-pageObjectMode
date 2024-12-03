
describe("tourism website scenario", () => {
    it("tourism website scenario test", () => {
        cy.visit('https://nichethyself.com/tourism/home.html');


        cy.contains('Customized tours').invoke('removeAttr', 'target').click();

        // Select an option in the dropdown and check the checkbox
        cy.get('select[id="days"]').select('Home Stay');
        cy.get('input[type="checkbox"]').eq(1).check();

        // Stub window.open to capture the URL
        let newUrl;
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                newUrl = url; // Store the URL from window.open
            });
        });

        //Trigger the button click that would normally open a new tab
        cy.get('button[class="link"]')
            .click()
            .then(() => {
                cy.url().then((currentUrl) => {
                    cy.log(currentUrl)
                    const baseUrl = currentUrl.split('/').slice(0, 4).join('/');
                    const fullUrl = newUrl.startsWith('http') ? newUrl : `${baseUrl}/${newUrl}`; // Combine the base URL with the relative path 
                    cy.log(fullUrl)
                    // Visit the full URL
                    cy.visit(fullUrl);

                    cy.window().then((win) => {
                        cy.stub(win, 'prompt').returns('London'); // Prompt answer giving here please note London is correct location for the Application
                    });


                    cy.get('span[class="glyphicon glyphicon-search"]').click()

                });

            });

    });
});