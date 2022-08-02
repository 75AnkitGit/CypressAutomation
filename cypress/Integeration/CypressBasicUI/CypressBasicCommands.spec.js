import { helperMethods } from '../../support/helperMethods.js';
describe('My first Test suit', function () {
    it('Placing Order Of Cauliflower', function () {
        cy.fixture('xpath').then(function (xpathData) {
            this.xpathData = xpathData;
            helperMethods.clickWithXpath(xpathData);
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
            cy.get('input[class="search-keyword"]').type("Cauliflower");
            cy.wait(5000);
            cy.contains('button', 'ADD TO CART').click();
            cy.get('img[alt="Cart"]').click();
            cy.contains('button', 'PROCEED TO CHECKOUT').click();
            cy.get('input[class="promoCode"]').type("Ankit");
            cy.get('button[class="promoBtn"]').click();
            cy.contains('button', 'Place Order').click();
            cy.get('select').select('India').should('have.value', 'India')
            cy.get('input[class="chkAgree"]').click();
            cy.contains('button', 'Proceed').click();
            cy.screenshot('Successfully Placed order');





        })

        it('Aseertion in Cypress Using Xpath', function () {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
            cy.title().should('eq', 'GreenKart - veg and fruits kart');
            cy.xpath("//input[@class='search-keyword']").type('Beetroot');
            cy.wait(5000);
            cy.xpath('//button[text()="ADD TO CART"]').click();
            cy.xpath('//strong[text()="32"]').should('have.text', '32');
            cy.xpath('//img[@alt="Cart"]').click();
            cy.xpath('//button[text()="PROCEED TO CHECKOUT"]').click();
            cy.xpath('//input[@class="promoCode"]').type("Ankit");
            cy.xpath('//button[@class="promoBtn"]').click().wait(5000);
            cy.xpath('//span[@class="promoInfo"]').should('have.text', 'Invalid code ..!').wait(5000);
            cy.xpath('//span[@class="discountPerc"]').should('have.text', '0%');
            cy.xpath('//span[@class="discountAmt"]').should('have.text', '32');
            cy.xpath('//button[text()="Place Order"]').click();
            cy.get('select').select('India').should('have.value', 'India')
            cy.xpath('//input[@class="chkAgree"]').click();
            cy.xpath('//button[text()="Proceed"]').click();
        })






    })
})