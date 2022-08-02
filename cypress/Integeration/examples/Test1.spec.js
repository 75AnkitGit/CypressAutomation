describe('My first Test suit', function () {

    it('Placing Order Of Cauliflower', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input[class="search-keyword"]').type("Cauliflower");
        cy.contains('button', 'ADD TO CART').click();
        cy.get('img[alt="Cart"]').click();
        cy.contains('button', 'PROCEED TO CHECKOUT').click();
        cy.get('input[class="promoCode"]').type("Ankit");
        cy.get('button[class="promoBtn"]').click();
        cy.contains('button', 'Place Order').click();
        cy.get('select').select('India').should('have.value', 'India');
        cy.get('input[class="chkAgree"]').click();
        cy.contains('button', 'Proceed').click();
        cy.screenshot('Successfully Placed order');

    })


    it('Webtable in Cypress', function () {
        cy.visit("https://www.tutorialspoint.com/plsql/plsql_dbms_output.htm");
        // identify the second column for all the rows
        cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)').each(($el,
            index, $list) => {
            // grabbing all text from second column
            const txt = $el.text();
            cy.log(txt);
            // checking the matching condition
            if (txt.includes('1')) {
                // capturing the next sibling with the help of next() method
                cy.get('.table.table-bordered > tbody > tr > td:nth-child(1)')
                    .eq(index).next().then(function (desc) {
                        // capturing the text of next sibling
                        const rsl = desc.text();
                        //assertion to verify the text
                        expect(rsl).to.contains('DBMS_OUTPUT.DISABLE');
                    })
            }
        })
    });

    it('Assertion in Cypress', function () {
        cy.visit("https://www.tutorialspoint.com/plsql/plsql_dbms_output.htm");


    });


})